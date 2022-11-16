import React, { useEffect } from "react";
import {
  ActionWrapper,
  ButtonGroup,
  Categories,
  ColumnHeading,
  ColumnValue,
  Container,
  DetailsRow,
  FilterButton,
  Heading,
  InfoText,
  InfoTextWrapper,
  List,
  ListItem,
  OrderBody,
  OrderColumn,
  OrderFooter,
  OrderImage,
  OrderImageGroup,
  OrderItemWrapper,
  OrderNav,
  RWrapper,
  SearchButton,
  SearchContainer,
  SearchIcon,
  SearchInput,
  SimpleButton,
  TextBlue,
  TextBold,
} from "./Styled";

import search from "./images/search.png";

function Orders() {
  useEffect(() => {
    document.title = "Your Orders";
  });
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

      <InfoTextWrapper>
        <InfoText>
          <b>23 orders</b> placed in{" "}
        </InfoText>
        <FilterButton>past 3 months</FilterButton>
      </InfoTextWrapper>

      <OrderItemWrapper>
        <OrderNav>
          <OrderColumn>
            <ColumnHeading>Order Placed</ColumnHeading>
            <ColumnValue>12 November 2022</ColumnValue>
          </OrderColumn>

          <OrderColumn>
            <ColumnHeading>Total</ColumnHeading>
            <ColumnValue>Rs. 3,999.00</ColumnValue>
          </OrderColumn>

          <OrderColumn>
            <ColumnHeading>Ship to</ColumnHeading>
            <TextBlue>Nishchal Chandrashekar</TextBlue>
          </OrderColumn>

          <OrderColumn>
            <ColumnHeading>Order #1272-29323-1846232</ColumnHeading>
            <TextBlue>
              View order details <span> | </span> Invoice
            </TextBlue>
          </OrderColumn>
        </OrderNav>

        <OrderBody>
          <DetailsRow>
            <OrderImageGroup>
              <TextBold>Shipped Sunday</TextBold>
              <OrderImage />
            </OrderImageGroup>
            <ButtonGroup>
              <SimpleButton style={{ marginBottom: "20px" }}>
                Track package
              </SimpleButton>
              <SimpleButton>Return items</SimpleButton>
              <SimpleButton>Share gift receipt</SimpleButton>
              <SimpleButton>Leave seller feedback</SimpleButton>
              <SimpleButton>Leave delivery feedback</SimpleButton>
              <SimpleButton>Write a product review</SimpleButton>
            </ButtonGroup>
          </DetailsRow>
        </OrderBody>
        <OrderFooter>
          <TextBlue style={{ fontSize: "15px" }}>Archive Order</TextBlue>
        </OrderFooter>
      </OrderItemWrapper>
    </Container>
  );
}

export default Orders;
