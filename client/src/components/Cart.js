import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";

const Cart = ({ openCartPanel, toggleDrawer }) => (
  <div>
    <Button onClick={toggleDrawer("right", true)}>Open Right</Button>
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
