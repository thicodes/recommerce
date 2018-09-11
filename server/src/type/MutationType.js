// @flow

import { GraphQLObjectType } from "graphql";

import LoginEmail from "../mutation/LoginEmailMutation";
import RegisterEmail from "../mutation/RegisterEmailMutation";
import ChangePassword from "../mutation/ChangePasswordMutation";
import ProductAddMutation from "../mutation/ProductAddMutation";

export default new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ProductAddMutation,
    // auth
    LoginEmail,
    RegisterEmail,
    ChangePassword
  })
});
