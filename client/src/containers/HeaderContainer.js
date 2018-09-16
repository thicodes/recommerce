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
        {JSON.stringify(this.props)}
        {this.props.products.map(p => (
          <div>
            <div>Produtos</div>
            <span>{p.title}</span>
            <input
              type="button"
              value="comprar"
              onClick={() => this.props.addToCart(p)}
            />
            <input
              type="button"
              value="remover"
              onClick={() => this.props.removeFromCart(p)}
            />
          </div>
        ))}

        {this.props.cart.map(c => (
          <div style={{ paddingTop: 30 }}>
            <div>Carrinho</div>
            <div style={{ paddingBottom: 20 }}>
              <input type="button" value="+" />
              <div>{c.qtd}</div>
              <input type="button" value="-" />
            </div>
          </div>
        ))}

        {JSON.stringify(this.props.cart)}
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
