import React, { useEffect } from "react";
import {
  BrandLogo,
  Button,
  Container,
  Heading,
  Input,
  Label,
  LinkText,
  Notice,
  Query,
  Wrapper,
} from "./Styled.js";
import amazonLogo from "./images/logo.png";

function Login() {
  useEffect(() => {
    document.title = "Amazon Sign In";
  });

  return (
    <Container>
      <BrandLogo src={amazonLogo} alt={amazonLogo} />
      <Wrapper>
        <Heading>Sign in</Heading>
        <Label>Email or mobile phone number</Label>
        <Input />
        <Button bg="#ffd700" bgHover="#ffd100" margin="10">
          Continue
        </Button>
        <Notice>
          By continuing, you agree to Amazon's{" "}
          <LinkText>Conditions of Use</LinkText> and{" "}
          <LinkText>Privacy Notice</LinkText>.
        </Notice>
      </Wrapper>
      <Query>New to Amazon?</Query>
      <Button bg="#F5F5F5" bgHover="#F0F0F0" margin="0">
        Create your Amazon account
      </Button>
    </Container>
  );
}

export default Login;
