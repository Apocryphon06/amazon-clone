import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.p`
  font-size: 32px;
  margin-right: 600px;
`;

export const RoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  line-height: 1.5em;
`;

export const TextPrimary = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const TextSecondary = styled.div`
  font-size: 14px;
`;

export const ImageIcon = styled.img`
  width: 50px;
  height: 40px;
  margin-right: 10px;
`;

export const IWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 0.5px solid #808080;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #F5F5F5;
  }
`;

export const TIWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 0.5px solid #808080;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 10px;
`;

export const TWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5em;
  width: 260px;
`;

export const TSecondary = styled.div`
  color: #188781;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: orangered;
    text-decoration: underline;
  }
`;
