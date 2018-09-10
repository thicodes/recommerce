// @flow

import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from "graphql";
import { globalIdField } from "graphql-relay";
import { registerType, nodeInterface } from "../../interface/NodeInterface";
import RoleType from "../../type/RoleType";

export default registerType(
  new GraphQLObjectType({
    name: "User",
    description: "User data",
    fields: () => ({
      id: globalIdField("User"),
      _id: {
        type: GraphQLString,
        resolve: user => user._id
      },
      name: {
        type: GraphQLString,
        resolve: user => user.name
      },
      email: {
        type: GraphQLString,
        resolve: user => user.email
      },
      role: {
        type: RoleType,
        resolve: user => user.role
      },
      active: {
        type: GraphQLBoolean,
        resolve: user => user.active
      }
    }),
    interfaces: () => [nodeInterface]
  })
);
