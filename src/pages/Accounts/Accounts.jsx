import React, { useContext, useEffect } from "react";
import {
  Container,
  Heading,
  ImageIcon,
  ItemWrapper,
  IWrapper,
  RoWrapper,
  TextPrimary,
  TextSecondary,
  TIWrapper,
  TSecondary,
  TWrapper,
} from "./Styled";

import order from "./images/order.png";
import address from "./images/address.png";
import pay from "./images/amazon-pay.png";
import contact from "./images/contact.png";
import payment from "./images/payment.png";
import prime from "./images/prime.png";
import security from "./images/security.png";
import { PathContext } from "../../context/PathContext";
import { Link } from "react-router-dom";

function Accounts() {
  // eslint-disable-next-line
  const [path, setPath] = useContext(PathContext);

  useEffect(() => {
    document.title = "Your Account";
  });
  return (
    <Container>
      <Heading>Your Account</Heading>
      <RoWrapper>
        <IWrapper onClick={() => setPath("orders")}>
          <ImageIcon src={order} alt={order} />
          <ItemWrapper>
            <TextPrimary>Your Orders</TextPrimary>
            <TextSecondary>Track, return or buy things again</TextSecondary>
          </ItemWrapper>
        </IWrapper>

        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          <IWrapper>
            <ImageIcon src={security} alt={security} />
            <ItemWrapper>
              <TextPrimary>Login & Security</TextPrimary>
              <TextSecondary>Edit login, name and mobile number</TextSecondary>
            </ItemWrapper>
          </IWrapper>
        </Link>

        <IWrapper>
          <ImageIcon src={prime} alt={prime} />
          <ItemWrapper>
            <TextPrimary>Prime</TextPrimary>
            <TextSecondary>View benefits and payment settings</TextSecondary>
          </ItemWrapper>
        </IWrapper>
      </RoWrapper>

      <RoWrapper>
        <IWrapper>
          <ImageIcon src={address} alt={address} />
          <ItemWrapper>
            <TextPrimary>Your Addresses</TextPrimary>
            <TextSecondary>Edit addresses for orders and gifts</TextSecondary>
          </ItemWrapper>
        </IWrapper>

        <IWrapper>
          <ImageIcon src={payment} alt={payment} />
          <ItemWrapper>
            <TextPrimary>Payment options</TextPrimary>
            <TextSecondary>Edit or add payment methods</TextSecondary>
          </ItemWrapper>
        </IWrapper>

        <IWrapper>
          <ImageIcon src={pay} alt={pay} />
          <ItemWrapper>
            <TextPrimary>Amazon Pay Balance</TextPrimary>
            <TextSecondary>Add money to your balance</TextSecondary>
          </ItemWrapper>
        </IWrapper>
      </RoWrapper>

      <RoWrapper
        style={{ paddingBottom: "15px", borderBottom: "1px solid #dfdfdf" }}
      >
        <IWrapper>
          <ImageIcon
            style={{ width: "60px", height: "60px" }}
            src={contact}
            alt={contact}
          />
          <ItemWrapper style={{ width: "190px" }}>
            <TextPrimary>Contact Us</TextPrimary>
          </ItemWrapper>
        </IWrapper>
      </RoWrapper>

      <RoWrapper style={{ marginTop: "20px" }}>
        <TIWrapper>
          <TWrapper>
            <TextPrimary>Digital content and devices</TextPrimary>
            <TSecondary>Apps and more</TSecondary>
            <TSecondary>Content and devices</TSecondary>
            <TSecondary>Digital gifts you've received</TSecondary>
          </TWrapper>
        </TIWrapper>

        <TIWrapper>
          <TWrapper>
            <TextPrimary>Email alerts, messages, and ads</TextPrimary>
            <TSecondary>Advertising preferences</TSecondary>
            <TSecondary>Communication preferences</TSecondary>
            <TSecondary>SMS alert preferences</TSecondary>
            <TSecondary>Message center</TSecondary>
            <TSecondary>Alexa shopping notifications</TSecondary>
            <TSecondary>Deals Notifications</TSecondary>
          </TWrapper>
        </TIWrapper>

        <TIWrapper>
          <TWrapper>
            <TextPrimary>More ways to pay</TextPrimary>
            <TSecondary>Default Purchase Settings</TSecondary>
            <TSecondary>Amazon Pay</TSecondary>
            <TSecondary>Bank accounts for refunds</TSecondary>
            <TSecondary>Coupons</TSecondary>
          </TWrapper>
        </TIWrapper>
      </RoWrapper>

      <RoWrapper>
        <TIWrapper>
          <TWrapper>
            <TextPrimary>Ordering and shopping preferences</TextPrimary>
            <TSecondary>Leave packaging feedback</TSecondary>
            <TSecondary>Lists</TSecondary>
            <TSecondary>Manage saved IDs</TSecondary>
            <TSecondary>Profile</TSecondary>
            <TSecondary>Language settings</TSecondary>
          </TWrapper>
        </TIWrapper>

        <TIWrapper>
          <TWrapper>
            <TextPrimary>Other accounts</TextPrimary>
            <TSecondary>Account Linking</TSecondary>
            <TSecondary>Amazon Business registration</TSecondary>
            <TSecondary>Seller account</TSecondary>
            <TSecondary>Amazon Web Services</TSecondary>
            <TSecondary>Login with Amazon</TSecondary>
          </TWrapper>
        </TIWrapper>

        <TIWrapper>
          <TWrapper>
            <TextPrimary>Shopping programs and rentals</TextPrimary>
            <TSecondary>Manage Your Profiles</TSecondary>
            <TSecondary>Subscribe & Save</TSecondary>
            <TSecondary>Shop the Kids' Store by age</TSecondary>
          </TWrapper>
        </TIWrapper>
      </RoWrapper>

      <RoWrapper>
        <TIWrapper>
          <TWrapper>
            <TextPrimary>Subscriptions</TextPrimary>
            <TSecondary>Email</TSecondary>
            <TSecondary>Memberships & Subscriptions</TSecondary>
          </TWrapper>
        </TIWrapper>

        <TIWrapper>
          <TWrapper>
            <TextPrimary>Data and Privacy</TextPrimary>
            <TSecondary>Request Your Information</TSecondary>
            <TSecondary>Close Your Amazon Account</TSecondary>
            <TSecondary>Privacy Notice</TSecondary>
          </TWrapper>
        </TIWrapper>
      </RoWrapper>
    </Container>
  );
}

export default Accounts;
