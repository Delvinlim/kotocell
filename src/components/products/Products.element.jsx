import styled from "styled-components";
import { mobile } from "../../responsive";

export const ProductContainer = styled.div`
  padding: 20px 20px 0;
  display: flex;
  /* height: 100vh; */
  overflow-x: hidden;
  justify-content: center;
  /* width: 100%; */
  ${mobile({ padding: "0" })}
`;

export const ProductContainerWrapper = styled.div`
  max-width: 1200px;
  /* padding: 20px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  /* ${mobile({ padding: "10px 20px" })} */
`;

export const ProductsTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductsTitle = styled.h1`
  font-size: 42px;
  ${mobile({ fontSize: "32px" })}
`;

export const TabText = styled.p`
  font-weight: 600;
`

export const PanelBox = styled.div`
  width: 280px;
  height: 280px;
  display: flex;
  justify-content: center;
  /* border: 1px solid green; */
`

export const PanelImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const ProductRecommendationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0 10px; 
  gap: 15px;
`

export const ProductRecommendation = styled.span`
  display: flex;
  justify-content: center;
  font-size: 34px;
  font-weight: 600;
`

export const ProductRecommendationCtaButton = styled.a`
  font-size: 20px;
  font-weight: 600;
  background-color: #e82e2e;
  color: white;
  padding: 0.7em 1em;
  padding-left: 0.9em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;
  width: 200px;
  margin-top: 20px;
  text-decoration: none;

  &:hover {
    background-color: rgba(232, 46, 46, 0.8)
  }
`