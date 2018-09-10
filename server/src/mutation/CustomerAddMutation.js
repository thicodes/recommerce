// @flow
import { GraphQLString, GraphQLNonNull, GraphQLInt } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { Customer } from "../model";
import { generateToken } from "../auth";
import pubSub, { EVENTS } from "../pubSub";
import CustomerType from "../modules/customer/CustomerType";
import type { CustomerType as CustomerTypeLoder } from "../loader/CustomerLoader";
import type { GraphQLContext } from "../TypeDefinition";
import MaritalType from "../type/MaritalType";

export default mutationWithClientMutationId({
  name: "CustomerAdd",
  inputFields: {
    cpf: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    identity: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    expeditingOrganization: {
      type: new GraphQLNonNull(GraphQLString)
    },
    maritalStatus: {
      type: new GraphQLNonNull(MaritalType)
    },
    profession: {
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    nationality: {
      type: new GraphQLNonNull(GraphQLString)
    },
    dateOfBirth: {
      type: new GraphQLNonNull(GraphQLString)
    },
    homeAddress: {
      type: new GraphQLNonNull(GraphQLString)
    },
    zipCode: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    phone: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    cellPhone: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    whereJob: {
      type: new GraphQLNonNull(GraphQLString)
    },
    //Conjuge
    spouseName: {
      type: GraphQLString
    },
    spouseCPF: {
      type: GraphQLInt
    },
    spouseIdentity: {
      type: GraphQLInt
    },
    spouseExpeditingOrganization: {
      type: GraphQLString
    },
    spouseNacionality: {
      type: GraphQLString
    },
    spouseProfession: {
      type: GraphQLString
    },
    spouseDateOfBirth: {
      type: GraphQLString
    },
    spouseCellPhone: {
      type: GraphQLInt
    },
    spouseZipCode: {
      type: GraphQLInt
    },
    spousePhone: {
      type: GraphQLInt
    },
    spouseWhereJob: {
      type: GraphQLString
    },
    spouseAddress: {
      type: GraphQLString
    }
  },
  mutateAndGetPayload: async (
    args: CustomerTypeLoader,
    context: GraphQLContext
  ) => {
    const { user } = context;
    /*
    if(!user) {
      throw new Error('invalid user')
    }
    */

    const customer = new Customer({
      ...args
    });
    await customer.save();

    // await pubSub.publish(EVENTS.customer.ADDED, {
    //   CustomerAdded: { customer }
    // });

    return {
      customer,
      error: null
    };
  },
  outputFields: {
    customer: {
      type: CustomerType,
      resolve: ({ customer }) => customer
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error
    }
  }
});
