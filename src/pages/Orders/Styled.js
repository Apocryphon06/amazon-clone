import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
`;

export const RWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Heading = styled.p`
  font-size: 32px;
  margin-right: 250px;
`;

export const ActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
  border: 1px solid #909090;
  border-radius: 2px;
  align-items: center;
  padding: 1px;
`;

export const SearchInput = styled.input`
  padding: 4px;
  font-size: 13px;
  width: 320px;
  border: none;
`;

export const SearchButton = styled.button`
  color: white;
  padding: 7px;
  font-size: 13px;
  font-weight: bold;
  border-radius: 20px;
  background-color: #131a22;
  border: none;
  cursor: pointer;
`;

export const SearchIcon = styled.img`
  padding: 5px;
  width: 15px;
  height: 15px;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #dfdfdf;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  display: inline;
  color: #188781;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  margin-right: 30px;
  &:hover {
    color: #be0000;
    text-decoration: underline;
  }
`;

export const InfoTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InfoText = styled.p`
  font-size: 14px;
`;

export const FilterButton = styled.button`
  margin-left:10px;
  padding: 7px 10px;
  cursor:pointer;
  border 1px solid #909090;
  background-color: whitesmoke;
  color: black;
  border-radius:10px;
  &:hover{
    background-color:#dfdfdf;
  }
`;

export const OrderItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrderNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: whitesmoke;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px;
  border: 1px solid #dfdfdf;
`;

export const OrderColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnHeading = styled.div`
  color: #202020;
  font-size: 13px;
  text-transform: uppercase;
`;

export const ColumnValue = styled.div`
  color: #181818;
  font-size: 13px;
`;

export const TextBlue = styled.div`
  color: #188781;
  font-size: 13px;
  &:hover {
    cursor: pointer;
    color: orangered;
  }
`;

export const OrderBody = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #dfdfdf;
  border-left: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  padding: 20px 20px;
`;

export const SimpleButton = styled.button`
  padding: 7px 50px;
  border: 1px solid #dfdfdf;
  background-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 5px;
  &:hover {
    background-color: whitesmoke;
  }
`;

export const DetailsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextBold = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const OrderImage = styled.img`
  width: 125px;
  height: 125px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrderImageGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrderFooter = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px 20px;
  border-bottom: 1px solid #dfdfdf;
  border-right: 1px solid #dfdfdf;
  border-left: 1px solid #dfdfdf;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
