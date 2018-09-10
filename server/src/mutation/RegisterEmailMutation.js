// @flow
import { GraphQLString, GraphQLNonNull, GraphQLEnumType } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { User } from "../model";
import { generateToken } from "../auth";
import pubSub, { EVENTS } from "../pubSub";
import RoleType from "../type/RoleType";

export default mutationWithClientMutationId({
  name: "RegisterEmail",
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    },
    role: {
      type: new GraphQLNonNull(RoleType)
    }
  },
  mutateAndGetPayload: async ({ name, email, password, role }) => {
    let user = await User.findOne({ email: email.toLowerCase() });

    if (user) {
      return {
        token: null,
        error: "EMAIL_ALREADY_IN_USE"
      };
    }

    user = new User({
      name,
      email,
      password,
      role
    });
    await user.save();

    await pubSub.publish(EVENTS.USER.ADDED, { UserAdded: { user } });

    return {
      token: generateToken(user),
      error: null
    };
  },
  outputFields: {
    token: {
      type: GraphQLString,
      resolve: ({ token }) => token
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error
    }
  }
});
