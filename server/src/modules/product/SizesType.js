// @flow

import { GraphQLEnumType } from "graphql";

export default new GraphQLEnumType({
  name: "Sizes",
  values: {
    P: {
      value: "P"
    },
    M: {
      value: "M"
    },
    G: {
      value: "G"
    },
    GG: {
      value: "GG"
    }
  }
});
