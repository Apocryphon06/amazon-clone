import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Wrapper = styled.div`
  bottom: 0;
  width: 100%;
  color: white;
  display: flex;
  position: absolute;
  flex-direction: column;
`;

export const ReturnSection = styled.div`
  display: flex;
  padding: 15px;
  cursor: pointer;
  font-size: 14px;
  flex-direction: row;
  justify-content: center;
  background-color: #37475a;
  &:hover {
    opacity: 0.9;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #232f3e;
  border-bottom: 0.5px solid #dfdfdf;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 50px;
  @media (max-width: 768px) {
    margin: 20px 20px;  
  }
  line-height: 1.8em;
`;

export const ItemHeader = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

export const ItemText = styled.div`
  font-size: 14px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
