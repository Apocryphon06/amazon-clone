import React, { useContext, useEffect } from "react";
import { Container } from "./Styled";
import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/Navbar/Navbar";
import Accounts from "../Accounts/Accounts";
import Orders from "../Orders/Orders";
import { PathContext } from "../../context/PathContext";
import Cart from "../Cart/Cart";

function Home() {
  useEffect(() => {
    document.title =
      "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in";
  });

  // eslint-disable-next-line
  const [path, setPath] = useContext(PathContext);

  const renderPage = () => {
    if (path === "home") {
      return <div style={{ height: "100vh" }}>Home page</div>;
    }
    if (path === "accounts") {
      return <Accounts />;
    }
    if (path === "orders") {
      return <Orders />;
    }
    if (path === "cart") {
      return <Cart />;
    }
  };

  return (
    <Container>
      <Navbar />
      {renderPage()}
      <Footer />
    </Container>
  );
}

export default Home;
