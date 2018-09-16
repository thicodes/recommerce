import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 20px;
`;

const Product = styled.div`
  border: 1px solid transparent;
  padding: 10px;
  box-sizing: border-box;
  &:hover {
    border: 1px solid #eee;
  }
`;

const ButtonStyled = styled(Button)`
  width: 100%;
`;

const ProductList = ({ products, addToCart, removeFromCart }) => (
  <Wrapper>
    <Grid container spacing={40}>
      {products.map(product => (
        <Grid item key={product} sm={6} md={4} lg={3}>
          <Product>
            <div
              style={{ maxHeight: 300, overflow: "hidden", marginBottom: 10 }}
            >
              <img
                src={product.photo}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <Typography
              variant="subheading"
              gutterBottom
              align="center"
              style={{ paddingBottom: 5 }}
            >
              {product.title}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              align="center"
              style={{ paddingBottom: 10 }}
            >
              R$ <span style={{ fontSize: 27 }}>{product.price}</span>
            </Typography>
            <ButtonStyled
              variant="contained"
              size="large"
              onClick={() => addToCart(product)}
              color="primary"
            >
              Add To Cart
            </ButtonStyled>
          </Product>
        </Grid>
      ))}
    </Grid>
  </Wrapper>
);

export default ProductList;
