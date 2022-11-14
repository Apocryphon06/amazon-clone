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
