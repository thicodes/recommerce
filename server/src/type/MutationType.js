// @flow

import { GraphQLObjectType } from "graphql";

import LoginEmail from "../mutation/LoginEmailMutation";
import RegisterEmail from "../mutation/RegisterEmailMutation";
import ChangePassword from "../mutation/ChangePasswordMutation";
import CustomerAdd from "../mutation/CustomerAddMutation";

export default new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    CustomerAdd,
    // auth
    LoginEmail,
    RegisterEmail,
    ChangePassword
  })
});
