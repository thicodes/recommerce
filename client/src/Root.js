import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ProductListContainer from "./containers/ProductListContainer";
import CheckoutContainer from "./containers/CheckoutContainer";
import HeaderContainer from "./containers/HeaderContainer";

class Root extends Component {
  state = {
    cart: [],
    products: [],
    cartQuantityByIds: {}
  };

  componentDidMount() {
    this.addProducts(this.props.query);
  }

  addProducts = data => {
    this.setState({
      products: data
    });
  };

  getStock = item => {
    const { node } = item;

    return this.props.query.find(query => query.node.id === node.id).node.stock;
  };

  canAdd = item => {
    const { node } = item;

    const sumQuantity = (this.state.cartQuantityByIds[node.id] || 0) + 1;
    const hasStock = sumQuantity <= this.getStock(item);

    if (hasStock) {
      return true;
    }
    return false;
  };

  addToCart = item => {
    const { node } = item;

    if (this.canAdd(item)) {
      this.setState({
        cartQuantityByIds: {
          ...this.state.cartQuantityByIds,
          [node.id]: (this.state.cartQuantityByIds[node.id] || 0) + 1
        }
      });
    }
  };

  getCartQuantity = obj => {
    if (obj) {
      return Object.keys(obj).reduce((sum, key) => {
        return sum + obj[key];
      }, 0);
    }
  };

  removeFromCart = item => {
    const { node } = item;
    const removeQuantity = this.state.cartQuantityByIds[node.id] - 1;

    if (removeQuantity >= 0) {
      this.setState({
        cartQuantityByIds: {
          ...this.state.cartQuantityByIds,
          [node.id]: this.state.cartQuantityByIds[node.id] - 1
        }
      });
    }
  };

  render() {
    return (
      <div>
        <CssBaseline />
        <HeaderContainer
          products={this.props.query}
          cart={this.state.cart}
          cartQuantityByIds={this.state.cartQuantityByIds}
          getCartQuantity={this.getCartQuantity}
        />
        <ProductListContainer
          products={this.props.query}
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
        />
      </div>
    );
  }
}

export default Root;
