import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  top: 0;
  width: 100%;
  padding: 10px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #131a22;
`;

export const Brand = styled.img`
  width: 100px;
  height: 40px;
  cursor: pointer;
  filter: brightness(0) invert(1);
  padding: 5px;
  border-radius: 2px;
  margin-right: 10px;
  &:hover {
    border: 1px solid white;
  }
`;

export const Location = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #131a22;
  border-radius: 2px;
  &:hover {
    border: 1px solid white;
  }
`;

export const PrimaryText = styled.div`
  font-size: 12px;
`;

export const TextBold = styled.div`
  font-size: 13px;
  font-weight: bold;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Pin = styled.img`
  width: 20px;
  height: 20px;
  padding-right: 5px;
  filter: brightness(0) invert(1);
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
`;

export const Search = styled.input`
  width: 590px;
  padding: 10px;
  font-size: 14px;
`;

export const DropdownButton = styled.button`
  width: 50px;
  border: none;
  font-size: 12px;
  background-color: #dfdfdf;
  cursor: pointer;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  &:hover {
    background-color: #c0c0c0;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  border: none;
  font-size: 12px;
  cursor: pointer;
  background-color: #ffcc66;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  &:hover {
    background-color: #ffcc00;
  }
`;

export const SearchIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const ItemWrapper = styled.div`
  padding: 10px;
  margin-right: 10px;
  border-radius: 2px;
  border: 1px solid #131a22;
  cursor: pointer;
  &:hover {
    border: 1px solid white;
  }
`;

export const CartIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const FlagIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const Categories = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  background-color: #232f3e;
  padding:0;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  display: inline;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
  border-radius: 2px;
  border: 1px solid #232f3e;
  &:hover {
    border: 1px solid white;
  }
`;
