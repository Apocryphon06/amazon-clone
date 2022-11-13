import React from "react";
import {
  Container,
  Wrapper,
  Brand,
  TextWrapper,
  Location,
  Pin,
  SearchContainer,
  Search,
  DropdownButton,
  SearchButton,
  SearchIcon,
  PrimaryText,
  TextBold,
  ItemWrapper,
  CartIcon,
  FlagIcon,
} from "./Styled";
import brand from "./images/amazon.png";
import pin from "./images/placeholder.png";
import search from "./images/search.png";
import cart from "./images/cart.png";
import flag from "./images/flag.png";

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Brand src={brand} alt={brand} />
        <Location>
          <Pin src={pin} alt={pin} />
          <TextWrapper>
            <PrimaryText>Deliver to Hrithik</PrimaryText>
            <TextBold>Bangalore 560023</TextBold>
          </TextWrapper>
        </Location>
        <SearchContainer>
          <DropdownButton>All</DropdownButton>
          <Search />
          <SearchButton>
            <SearchIcon src={search} alt={search} />
          </SearchButton>
        </SearchContainer>

        <ItemWrapper>
          <FlagIcon src={flag} alt={flag} />
        </ItemWrapper>

        <ItemWrapper>
          <TextWrapper>
            <PrimaryText>Hello, Hrithik</PrimaryText>
            <TextBold>Account & Lists</TextBold>
          </TextWrapper>
        </ItemWrapper>

        <ItemWrapper>
          <TextWrapper>
            <PrimaryText>Returns</PrimaryText>
            <TextBold>& Orders</TextBold>
          </TextWrapper>
        </ItemWrapper>

        <ItemWrapper>
          <CartIcon src={cart} alt={cart} />
        </ItemWrapper>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
