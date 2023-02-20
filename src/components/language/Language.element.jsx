import styled from "styled-components";
import { mobile } from "../../responsive";

export const LanguageContainer = styled.div`
  /* display: flex;
  justify-content: space-between; */
`;

export const LanguageWrapper = styled.div`
  margin: 15px;
  ${mobile({ margin: "0px 15px", display: "flex", flexDirection: "column" })};
`;

export const Select = styled.select`
  border-radius: 12px;
  padding: 8px;
  ${mobile({ margin: "10px 0px" })};
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

export const Option = styled.option`
  margin: 5px;
  padding: 10px;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
`;
