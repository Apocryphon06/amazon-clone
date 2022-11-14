import React, { useEffect } from "react";
import { Container } from "./Styled";

function Accounts() {
  useEffect(()=>{
    document.title="Your Account"  
  })
  return <Container>Your Account</Container>;
}

export default Accounts;
