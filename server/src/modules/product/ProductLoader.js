// @flow
import DataLoader from "dataloader";
import { Product as ProductModel } from "../../model/index";
import {
  connectionFromMongoCursor,
  mongooseLoader
} from "@entria/graphql-mongoose-loader";

import type { ConnectionArguments } from "graphql-relay";
import type { GraphQLContext } from "../../TypeDefinition";

type ProductType = {
  id: string,
  _id: string,
  title: string,
  description: string,
  photo: string,
  price: string,
  sizes: string
};

export default class Product {
  id: string;
  _id: string;
  title: string;
  description: string;
  photo: string;
  price: string;
  sizes: string;

  constructor(data: ProductType, { product }: GraphQLContext) {
    this.id = data.id;
    this._id = data._id;
    this.title = data.title;
    this.description = data.description;
    this.photo = data.photo;
    this.price = data.price;
    this.sizes = data.sizes;
  }
}

export const getLoader = () =>
  new DataLoader(ids => mongooseLoader(ProductModel, ids));

const viewerCanSee = (context, data) => {
  // Anyone can see another user
  return true;
};

export const load = async (
  context: GraphQLContext,
  id: string
): Promise<?Product> => {
  if (!id) {
    return null;
  }

  let data;
  try {
    data = await context.dataloaders.ProductLoader.load(id);
  } catch (err) {
    return null;
  }
  return viewerCanSee(context, data) ? new Product(data, context) : null;
};

export const clearCache = ({ dataloaders }: GraphQLContext, id: string) => {
  return dataloaders.ProductLoader.clear(id.toString());
};

export const loadProducts = async (
  context: GraphQLContext,
  args: ConnectionArguments
) => {
  const where = args.search
    ? { name: { $regex: new RegExp(`^${args.search}`, "ig") } }
    : {};
  const products = ProductModel.find(where, { _id: 1 }).sort({ createdAt: -1 });

  return connectionFromMongoCursor({
    cursor: products,
    context,
    args,
    loader: load
  });
};
