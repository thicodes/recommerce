import React, { Component } from "react";
import Header from "../components/Header";
import Cart from "../components/Cart";

class HeaderContainer extends Component {
  state = {
    openCartPanel: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      openCartPanel: open
    });
  };

  render() {
    const { openCartPanel } = this.state;

    return (
      <Header>
        <Cart openCartPanel={openCartPanel} toggleDrawer={this.toggleDrawer} />
      </Header>
    );
  }
}

export default HeaderContainer;
