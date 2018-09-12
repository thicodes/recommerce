import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductListContainer from "./containers/ProductListContainer";
import CheckoutContainer from "./containers/CheckoutContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={ProductListContainer} />
          <Route path="/checkout" exact component={CheckoutContainer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
