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
      <div>
        <Header>
          <Cart
            openCartPanel={openCartPanel}
            toggleDrawer={this.toggleDrawer}
            cartProducts={this.props.getCartQuantity(
              this.props.cartQuantityByIds
            )}
          />
        </Header>
      </div>
    );
  }
}

// const WrapComponent = () => (
//   <Consumer>{context => <HeaderContainer context={context} />}</Consumer>
// );

export default HeaderContainer;
