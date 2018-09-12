import React from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const Wrapper = styled.div`
  flex-grow: 1;
`;

const Title = styled(Typography)`
  flex-grow: 1;
`;

const Header = ({ children }) => (
  <Wrapper>
    <AppBar position="static">
      <Toolbar>
        <Title variant="title" color="inherit">
          recommerce
        </Title>
        {children}
      </Toolbar>
    </AppBar>
  </Wrapper>
);

export default Header;
