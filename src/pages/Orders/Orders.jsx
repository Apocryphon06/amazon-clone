import React, { useEffect } from "react";
import {
  ActionWrapper,
  Categories,
  Container,
  Heading,
  List,
  ListItem,
  RWrapper,
  SearchButton,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "./Styled";

import search from "./images/search.png";

function Orders() {

  useEffect(()=>{
    document.title="Your Orders"  
  })
  return (
    <Container>
      <RWrapper>
        <Heading>Your Orders</Heading>
        <ActionWrapper>
          <SearchContainer>
            <SearchIcon src={search} alt={search} />
            <SearchInput placeholder="Search all orders" />
          </SearchContainer>
          <SearchButton>Search Orders</SearchButton>
        </ActionWrapper>
      </RWrapper>
      <Categories>
        <List>
          <ListItem>Orders</ListItem>
          <ListItem>Buy Again</ListItem>
          <ListItem>Not Yet Shipped</ListItem>
          <ListItem>Cancelled Orders</ListItem>
        </List>
      </Categories>
    </Container>
  );
}

export default Orders;
