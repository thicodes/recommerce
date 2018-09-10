// @flow

import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from "graphql";
import { globalIdField } from "graphql-relay";
import { registerType, nodeInterface } from "../../interface/NodeInterface";

export default registerType(
  new GraphQLObjectType({
    name: "Product",
    description: "Product data",
    fields: () => ({
      id: globalIdField("Product"),
      _id: {
        type: GraphQLString,
        resolve: product => product._id
      },
      title: {
        type: GraphQLString,
        resolve: product => product.title
      },
      description: {
        type: GraphQLString,
        resolve: product => product.description
      },
      photo: {
        type: GraphQLString,
        resolve: product => product.photo
      },
      price: {
        type: GraphQLString,
        resolve: product => product.price
      }
    }),
    interfaces: () => [nodeInterface]
  })
);
