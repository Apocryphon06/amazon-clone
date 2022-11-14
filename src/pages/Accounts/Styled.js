import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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
  align-items: center;
  border: 0.5px solid #808080;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #dfdfdf;
  }
`;
