import React from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";

const ShowBadge = ({ cartProducts }) =>
  cartProducts === 0 ? (
    <ShoppingCartIcon />
  ) : (
    <Badge badgeContent={cartProducts} color="secondary">
      <ShoppingCartIcon />
    </Badge>
  );

const Cart = ({ openCartPanel, toggleDrawer, cartProducts }) => (
  <div>
    <IconButton onClick={toggleDrawer("right", true)} color="inherit">
      <ShowBadge cartProducts={cartProducts} />
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
      />
    </Drawer>
  </div>
);

export default Cart;
