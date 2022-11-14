import React, { useEffect } from "react";
import {
  Container,
  Heading,
  ImageIcon,
  ItemWrapper,
  IWrapper,
  RoWrapper,
  TextPrimary,
  TextSecondary,
} from "./Styled";

import order from "./images/order.png";
import address from "./images/address.png";
import pay from "./images/amazon-pay.png";
import contact from "./images/contact.png";
import payment from "./images/payment.png";
import prime from "./images/prime.png";
import security from "./images/security.png";

function Accounts() {
  useEffect(() => {
    document.title = "Your Account";
  });
  return (
    <Container>
      <Heading>Your Account</Heading>
      <RoWrapper>
        <IWrapper>
          <ImageIcon src={order} alt={order} />
          <ItemWrapper>
            <TextPrimary>Your Orders</TextPrimary>
            <TextSecondary>Track, return or buy things again</TextSecondary>
          </ItemWrapper>
        </IWrapper>

        <IWrapper>
          <ImageIcon src={security} alt={security} />
          <ItemWrapper>
            <TextPrimary>Login & Security</TextPrimary>
            <TextSecondary>Edit login, name and mobile number</TextSecondary>
          </ItemWrapper>
        </IWrapper>

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

      <RoWrapper>
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
    </Container>
  );
}

export default Accounts;
