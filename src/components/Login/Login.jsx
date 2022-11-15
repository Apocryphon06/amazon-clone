import React, { useEffect, useState } from "react";
import {
  BrandLogo,
  Button,
  Container,
  Heading,
  Input,
  Label,
  LinkText,
  Notice,
  PasswordHelp,
  PasswordLabel,
  PasswordText,
  Query,
  Text,
  Wrapper,
} from "./Styled.js";
import amazonLogo from "./images/logo.png";
import { Link } from "react-router-dom";

function Login() {
  useEffect(() => {
    document.title = "Amazon Sign In";
  });

  const [bool, setBool] = useState(false);
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");

  const checkInput = () => {
    if (uname === "") {
      setBool(false);
    } else {
      setBool(true);
      console.log("uname: " + uname);
    }
  };

  return (
    <Container>
      <BrandLogo src={amazonLogo} alt={amazonLogo} />
      <Wrapper>
        <Heading>Sign in</Heading>
        {bool ? (
          <PasswordLabel>
            <Text>
              {uname} <LinkText onClick={() => setBool(false)}>Change</LinkText>
            </Text>
          </PasswordLabel>
        ) : (
          <></>
        )}
        {bool ? (
          <PasswordLabel>
            <PasswordText>Password</PasswordText>
            <PasswordHelp>Forgot Password</PasswordHelp>
          </PasswordLabel>
        ) : (
          <Label>Email or mobile phone number</Label>
        )}
        {bool ? (
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        ) : (
          <Input type="text" onChange={(e) => setUname(e.target.value)} />
        )}
        {bool ? (
          <Button bg="#ffd700" bgHover="#ffd100" margin="10">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Sign in
            </Link>
          </Button>
        ) : (
          <Button
            onClick={checkInput}
            bg="#ffd700"
            bgHover="#ffd100"
            margin="10"
          >
            Continue
          </Button>
        )}
        <Notice>
          By continuing, you agree to Amazon's{" "}
          <LinkText>Conditions of Use</LinkText> and{" "}
          <LinkText>Privacy Notice</LinkText>.
        </Notice>
      </Wrapper>
      {bool ? (
        <></>
      ) : (
        <>
          <Query>New to Amazon?</Query>
          <Button bg="#F5F5F5" bgHover="#F0F0F0" margin="0">
            Create your Amazon account
          </Button>
        </>
      )}
    </Container>
  );
}

export default Login;
