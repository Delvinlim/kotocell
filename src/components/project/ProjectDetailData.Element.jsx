import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const ProjectDetailDataContainer = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  /* height: 100vh; */
  height: auto;
  /* overflow-x: hidden; */
  /* border: 1px solid blue; */
  ${mobile({ padding: "0" })}/* ${tablet({ padding: "0" })} */
`;
export const ProjectDetailDataWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 3;
`;

export const ProjectDetailDataTop = styled.div`
  border: 1px solid blue;
  width: 100%;
  height: 80px;
`

export const ProjectDetailDataBottom = styled.div`
  display: flex;
  gap: 20px;
`


export const ProjectDetailDataLeft = styled.div`
  flex: 1;
  border: 1px solid blue;
  height: 400px;
`;

export const ProjectDetailDataImageWrapper = styled.div`

`;

export const ProjectDetailDataRight = styled.div`
  flex: 2;
  border: 1px solid green;
  height: 400px;
`;

export const ProjectDetailDataInfo = styled.div``;
