import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import ProductListContainer from "./containers/ProductListContainer";
import CheckoutContainer from "./containers/CheckoutContainer";
import configureStore from "./configureStore";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={ProductListContainer} />
            <Route path="/checkout" exact component={CheckoutContainer} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
