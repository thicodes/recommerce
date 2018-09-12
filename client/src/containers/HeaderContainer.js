import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import Cart from "../components/Cart";

class HeaderContainer extends Component {
  state = {
    openCartPanel: false,
    cart: [{ id: 1 }, { id: 2 }, { id: 3 }]
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      openCartPanel: open
    });
  };

  render() {
    const { openCartPanel, cart } = this.state;

    return (
      <Header>
        <Cart
          openCartPanel={openCartPanel}
          toggleDrawer={this.toggleDrawer}
          cart={cart}
        />
      </Header>
    );
  }
}

export default HeaderContainer;
