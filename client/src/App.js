import React, { Component, Fragment } from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "./Environment";
import Root from "./Root";
import "typeface-roboto";

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {
            products {
              edges {
                node {
                  id
                  title
                  description
                  photo
                  price
                  sizes
                  stock
                }
              }
            }
          }
        `}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <Root query={props.products.edges} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}

export default App;
