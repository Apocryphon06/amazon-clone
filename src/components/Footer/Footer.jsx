import React from "react";
import {
  AboutWrapper,
  Container,
  ItemHeader,
  ItemText,
  ItemWrapper,
  ReturnSection,
  Wrapper,
} from "./Styled";

function Footer() {
  return (
    <Container>
      <Wrapper>
        <ReturnSection>Back to top</ReturnSection>

        <AboutWrapper>
          <ItemWrapper>
            <ItemHeader>Get to Know Us</ItemHeader>
            <ItemText>About Us</ItemText>
            <ItemText>Careers</ItemText>
            <ItemText>Press Releases</ItemText>
            <ItemText>Amazon Science</ItemText>
          </ItemWrapper>

          <ItemWrapper>
            <ItemHeader>Connect with Us</ItemHeader>
            <ItemText>Facebook</ItemText>
            <ItemText>Twitter</ItemText>
            <ItemText>Instagram</ItemText>
          </ItemWrapper>

          <ItemWrapper>
            <ItemHeader>Make Money with Us</ItemHeader>
            <ItemText>Sell on Amazon</ItemText>
            <ItemText>Sell under Amazon Accelerator</ItemText>
            <ItemText>Amazon Global Selling</ItemText>
            <ItemText>Become an Affiliate</ItemText>
            <ItemText>Fulfilment by Amazon</ItemText>
            <ItemText>Advertise Your Products</ItemText>
            <ItemText>Amazon Pay on Merchants</ItemText>
          </ItemWrapper>

          <ItemWrapper>
            <ItemHeader>Let Us Help You</ItemHeader>
            <ItemText>COVID-19 and Amazon</ItemText>
            <ItemText>Your Account</ItemText>
            <ItemText>Returns Centre</ItemText>
            <ItemText>100% Purchase Protection</ItemText>
            <ItemText>Amazon App Download</ItemText>
            <ItemText>Amazon Assistant Download</ItemText>
            <ItemText>Help</ItemText>
          </ItemWrapper>
        </AboutWrapper>
      </Wrapper>
    </Container>
  );
}

export default Footer;
