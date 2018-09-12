import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import ProductListContainer from "./containers/ProductListContainer";
import CheckoutContainer from "./containers/CheckoutContainer";
import HeaderContainer from "./containers/HeaderContainer";
import configureStore from "./configureStore";
import "typeface-roboto";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <HeaderContainer />
          <Router>
            <Switch>
              <Route path="/" exact component={ProductListContainer} />
              <Route path="/checkout" exact component={CheckoutContainer} />
            </Switch>
          </Router>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
