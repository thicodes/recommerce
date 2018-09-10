import { graphql } from "graphql";

import { Customer } from "../../model";
import { schema } from "../../schema";
import {
  getContext,
  connectMongoose,
  clearDbAndRestartCounters,
  disconnectMongoose,
  createRows
} from "../../../test/helper";

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

// it("should not register with an existing email", async () => {
//   const user = await createRows.createUser();

//   // language=GraphQL
//   const query = `
//     mutation M {
//       RegisterEmail(input: {
//         clientMutationId: "abc"
//         name: "Awesome"
//         email: "${user.email}"
//         password: "awesome"
//       }) {
//         clientMutationId
//         token
//         error
//       }
//     }
//   `;

//   const rootValue = {};
//   const context = getContext();

//   const result = await graphql(schema, query, rootValue, context);
//   const { RegisterEmail } = result.data;

//   expect(RegisterEmail.token).toBe(null);
//   expect(RegisterEmail.error).toBe("EMAIL_ALREADY_IN_USE");
// });

it("should create a new customer when parameters are valid", async () => {
  // language=GraphQL
  const query = `
    mutation M {
      CustomerAdd(input: {
        cpf: 77777
  expeditingOrganization: "asdsd"
  identity: 123123123
  maritalStatus: SOLTEIRO
  profession: "asdsd"
  name: "asdsd"
  email: "asdsd"
  nationality: "asdsd" 
  dateOfBirth: "2011-12-19T00:00:00Z"
  homeAddress: "asdsd"
  zipCode: 123123
  phone: 123123
  cellPhone: 123123
  whereJob: "asdsd"
  
  spouseName: "ssdsds"
  spouseCPF: 123123
  spouseIdentity: 123123
  spouseExpeditingOrganization: "ssdsds"
  spouseNacionality: "ssdsds"
  spouseProfession: "ssdsds"
  spouseDateOfBirth: "2011-12-19T00:00:00Z"
  spouseCellPhone: 123123
  spouseZipCode: 123123
  spousePhone: 123123
  spouseWhereJob: "ssdsds"
  spouseAddress: "ssdsds"
      }) {
        customer {
          id
        }
      }     
    }
  `;

  const rootValue = {};
  const context = getContext();

  const result = await graphql(schema, query, rootValue, context);
  const { RegisterEmail } = result.data;

  const customer = await Customer.findOne({
    email
  });

  expect(customer).not.toBe(null);
  expect(RegisterEmail.error).toBe(null);
});
