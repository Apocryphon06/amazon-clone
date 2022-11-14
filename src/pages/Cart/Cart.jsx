import React, { useEffect } from "react";
import { Container } from "./Styled";

function Cart() {
  useEffect(() => {
    document.title = "Amazon.in Shopping Cart";
  });
  return <Container>Cart</Container>;
}

export default Cart;
