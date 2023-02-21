import styled from "styled-components";
import { mobile } from "../../responsive";

export const ProductContainer = styled.div`
  padding: 20px 20px 0;
  display: flex;
  height: 100vh;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
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
  align-items: center;
  /* border: 1px solid green; */
  position: relative;
  &:hover > img {
    filter: blur(0.8rem);
  }

  &:hover > div {
    opacity: 1;
  }
`

export const PanelImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 12px;
  object-fit: cover;
  position: relative;
`

export const PanelData = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  transform: translate(-50%, -50%);
  background-color: rgba(24, 26, 27, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0;
  transition: all 0.3s;
  cursor: pointer;

  & > a {
    display: inline-flex;
    align-items: center;
    padding: 1.2rem 2rem;
    border-radius: 0.5rem;
    text-align: center;
    background-color: rgba(24, 26, 27, 0.8);
    text-decoration: none;
    color: white;
    transition: all 0.3s;
    font-family: "JetBrains Mono", "Fira Code", monospace;

    &:not(:last-child) {
      margin-right: 1rem;
    }

    &:hover {
      background-color: #e82e2e;
    }
  }
`

export const PanelDataText = styled.a``

export const ProductRecommendationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px 0 10px; 
  gap: 10px;
`

export const ProductRecommendation = styled.span`
  display: flex;
  justify-content: center;
  font-size: 28px;
  font-weight: 500;
  ${mobile({ fontSize: "18px" })}
`

export const TabsWrapper = styled.div`
  ${mobile({ display: "none" })}
`

export const ProductRecommendationCtaButton = styled.a`
  font-size: 20px;
  font-weight: 600;
  background-color: #e82e2e;
  color: white;
  padding: 0.5em 1em;
  padding-left: 0.9em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;
  width: 140px;
  margin-top: 15px;
  text-decoration: none;

  &:hover {
    background-color: rgba(232, 46, 46, 0.8)
  }
`