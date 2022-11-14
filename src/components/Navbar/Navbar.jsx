import React, { useContext } from "react";
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
  Categories,
  List,
  ListItem,
} from "./Styled";
import brand from "./images/amazon.png";
import pin from "./images/placeholder.png";
import search from "./images/search.png";
import cart from "./images/cart.png";
import flag from "./images/flag.png";
import { PathContext } from "../../context/PathContext";

function Navbar() {
  // eslint-disable-next-line
  const [path, setPath] = useContext(PathContext);
  return (
    <Container>
      <Wrapper>
        <Brand onClick={() => setPath("home")} src={brand} alt={brand} />
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
          <TextWrapper onClick={() => setPath("accounts")}>
            <PrimaryText>Hello, Hrithik</PrimaryText>
            <TextBold>Account & Lists</TextBold>
          </TextWrapper>
        </ItemWrapper>

        <ItemWrapper>
          <TextWrapper onClick={() => setPath("orders")}>
            <PrimaryText>Returns</PrimaryText>
            <TextBold>& Orders</TextBold>
          </TextWrapper>
        </ItemWrapper>

        <ItemWrapper onClick={() => setPath("cart")}>
          <CartIcon src={cart} alt={cart} />
        </ItemWrapper>
      </Wrapper>
      <Categories>
        <List>
          <ListItem>All</ListItem>
          <ListItem>Sell</ListItem>
          <ListItem>Fresh</ListItem>
          <ListItem>Today's Deals</ListItem>
          <ListItem>Health, Household & Personal Care</ListItem>
          <ListItem>Mobiles</ListItem>
          <ListItem>Electronics</ListItem>
          <ListItem>Prime</ListItem>
          <ListItem>New Releases</ListItem>
          <ListItem>Best Sellers</ListItem>
          <ListItem>Gift Cards</ListItem>
          <ListItem style={{ fontSize: "15px" }}>
            Shopping made easy | Download the app
          </ListItem>
        </List>
      </Categories>
    </Container>
  );
}

export default Navbar;
