import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductListContainer from "./containers/ProductListContainer";
import CheckoutContainer from "./containers/CheckoutContainer";
import HeaderContainer from "./containers/HeaderContainer";
import "typeface-roboto";

class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer />
        <Router>
          <Switch>
            <Route path="/" exact component={ProductListContainer} />
            <Route path="/checkout" exact component={CheckoutContainer} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
