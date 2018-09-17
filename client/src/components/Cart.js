import React from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import styled from "styled-components";

const CartPanelStyled = styled.div`
  width: 550px;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const ButtonClose = styled.div`
  font-family: "Roboto";
  width: 50px;
  height: 50px;
  color: #ececec;
  background-color: #1b1a20;
  text-align: center;
  line-height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;

const ShowBadge = ({ cartProductsQuantity }) =>
  cartProductsQuantity === 0 ? (
    <ShoppingCartIcon />
  ) : (
    <Badge badgeContent={cartProductsQuantity} color="secondary">
      <ShoppingCartIcon />
    </Badge>
  );

const Cart = ({ openCartPanel, toggleDrawer, cartProductsQuantity }) => (
  <div>
    <IconButton onClick={toggleDrawer("right", true)} color="inherit">
      <ShowBadge cartProductsQuantity={cartProductsQuantity} />
    </IconButton>
    <Drawer
      anchor="right"
      open={openCartPanel}
      onClose={toggleDrawer("right", false)}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={toggleDrawer("right", false)}
        onKeyDown={toggleDrawer("right", false)}
      >
        <CartPanelStyled>
          <ButtonClose>X</ButtonClose>
        </CartPanelStyled>
      </div>
    </Drawer>
  </div>
);

export default Cart;
