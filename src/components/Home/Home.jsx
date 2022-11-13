import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container } from "./Styled";
import Footer from "../Footer/Footer.jsx";

function Home() {
  useEffect(() => {
    document.title =
      "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in";
  });
  const value = useSelector((state) => state.test);
  return (
    <Container>
      {value}
      <Footer />
    </Container>
  );
}

export default Home;
