import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BrandLogo = styled.img`
  width: 130px;
  height: 50px;
  margin: auto;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 15px;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  flex-direction: column;
  margin-bottom: 10px;
  width: 320px;
`;

export const Heading = styled.p`
  font-size: 28px;
  margin: 10px;
`;

export const LinkText = styled.span`
  color: #00a8e1;
  letter-spacing: -0.7px;
  cursor: pointer;
  &:hover {
    color: red;
    text-decoration: underline;
  }
`;

export const Label = styled.p`
  margin: 10px;
  font-size: 14px;
  font-weight: bold;
`;

export const PasswordLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  margin-bottom:-10px;
`;

export const PasswordText = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const PasswordHelp = styled.p`
  color: #00a8e1;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.7px;
  cursor: pointer;
  &:hover {
    color: red;
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  padding: 8px;
  margin: 10px;
  font-size: 12px;
  margin-bottom: 0;
  border: 0.5px solid black;
  border-radius: 2px;
`;

export const Button = styled.button`
  padding: 6px;
  margin: ${(props) => props.margin}px;
  font-size: 13px;
  letter-spacing: 0.1px;
  cursor: pointer;
  background-color: ${(props) => props.bg};
  border: 0.5px solid black;
  border-radius: 2px;
  &:hover {
    background-color: ${(props) => props.bgHover};
  }
`;

export const Notice = styled.div`
  margin: 10px;
  font-size: 12px;
`;

export const Query = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  color: #808080;
  margin-top: 10px;
  margin-bottom: 10px;
`;
