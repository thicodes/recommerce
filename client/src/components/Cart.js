import React from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";

const Cart = ({ openCartPanel, toggleDrawer, cart }) => (
  <div>
    <IconButton onClick={toggleDrawer("right", true)} color="inherit">
      <Badge badgeContent={cart.length} color="secondary">
        <ShoppingCartIcon />
      </Badge>
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
        asdasd
      </div>
    </Drawer>
  </div>
);

export default Cart;
