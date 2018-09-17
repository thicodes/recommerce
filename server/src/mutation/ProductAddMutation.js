// @flow
import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLList,
  GraphQLInt
} from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import ProductType from "../modules/product/ProductType";
import { Product } from "../model";
import SizesType from "../modules/product/SizesType";

export default mutationWithClientMutationId({
  name: "ProductAdd",
  inputFields: {
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    description: {
      type: new GraphQLNonNull(GraphQLString)
    },
    photo: {
      type: new GraphQLNonNull(GraphQLString)
    },
    price: {
      type: new GraphQLNonNull(GraphQLString)
    },
    sizes: {
      type: new GraphQLNonNull(SizesType)
    },
    stock: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  },
  mutateAndGetPayload: async (
    args: CustomerTypeLoader,
    context: GraphQLContext
  ) => {
    const { title } = args;

    if (!title.trim() || title.trim().length < 2) {
      return {
        message: "Invalid title",
        error: "INVALID_TITLE"
      };
    }

    const data = new Product({
      ...args
    });

    const product = await data.save();

    return {
      message: "Product created with success",
      error: null,
      product
    };
  },
  outputFields: {
    message: {
      type: GraphQLString,
      resolve: ({ message }: Output) => message
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }: Output) => error
    },
    product: {
      type: ProductType,
      resolve: ({ product }) => product
    }
  }
});
