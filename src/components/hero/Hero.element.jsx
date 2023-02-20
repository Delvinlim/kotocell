import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const HeroContainer = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-x: hidden;
  /* border: 1px solid blue; */
  ${mobile({ padding: "0" })}/* ${tablet({ padding: "0" })} */
`;

export const HeroContainerWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex: 3;
  align-items: center;
  justify-content: space-between;
  ${mobile({ justifyContent: "center" })}
`;

export const HeroContainerWrapperLeft = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: flex-start;
  line-height: 0.8em;
  ${mobile({ padding: "0 10px" })}
`;

export const HeroContainerWrapperRight = styled.div`
  padding: 10px 20px;
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}
`;

export const HeroImage = styled.img`
  width: 400px;
  height: 400px;
`;

export const HeroIntro = styled.h3`
  /* font-size: 16px; */
  /* font-weight: 400; */
  margin: 5px;
  font-family: "JetBrains Mono", "Fira Code", monospace;
  font-weight: 600;
  ${mobile({ fontSize: "14px" })}/* color */
`;

export const HeroName = styled.h1`
  font-size: 64px;
  margin: 0;
  letter-spacing: 3px;
  line-height: 1.2em;
  display: flex;
  &::before,
  &::after {
    margin: 0;
    padding: 0;
  }
  ${mobile({ fontSize: "32px" })}
`;

export const Emoji = styled.span`
  font-size: 24px;
`;

export const FirstName = styled.span`
  margin: 0 10px 0 0;
  /* position: relative;

  &::after {
    content: "";
    position: absolute;
    margin-top: 5px;
    bottom: -0.2rem;
    left: 0;
    width: 98%;
    height: 0.4rem;
    border-radius: 1rem;
    background-image: linear-gradient(90deg, #9f55ff, #7000ff);
    box-shadow: 0 0 1rem #7000ff;
  } */
`;

export const LastName = styled.span`
  color: #e82e2e;
`;

export const HeroInfo = styled.h2`
  display: block;
  font-size: 24px;
  margin-top: 0.2em;
  margin-bottom: 0.8em;
  max-width: 640px;
  /* max-width: 80rem; */
  line-height: 2rem;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  /* &::before,
  &::after {
    margin: 0;
    padding: 0;
  } */
  ${mobile({ fontSize: "16px" })}
`;

export const HeroCta = styled.div``

export const HeroCtaButton = styled.a`
  font-size: 20px;
  font-weight: 600;
  background-color: #e82e2e;
  color: white;
  padding: 0.7em 1em;
  padding-left: 0.9em;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  width: 150px;
  /* width: 140px; */

  &:hover {
    background-color: rgba(232, 46, 46, 0.8)
  }
`

export const HeroWatermark = styled.div`
  font-family: "JetBrains Mono", "Fira Code", monospace;
  position: absolute;
  opacity: ${({ theme }) => (theme.text === "white" ? "0.1" : "0.3")};
  z-index: -10;
  bottom: 95%;
  left: 95%;
  font-size: 12rem;
  display: inline-block;
  transform: rotate(90deg) translate(93%, 125%);
  ${mobile({ left: "90%" })}
`;

export const HeroContact = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
  font-family: "JetBrains Mono", "Fira Code", monospace;
  font-size: 16px;
  /* animation-name: hero_fadeAppear__3Aui1;
  animation-duration: 2s;
  animation-delay: 3.8s; */
`;

export const Contact = styled.a`
  font-family: inherit;
  font-size: inherit;
  text-decoration: none;
  display: inline-block;
  /* color: #7000ff; darker purple */
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease-in;
  position: relative;

  &:hover {
    color: #e82e2e;
  }

  &::after {
    content: "";
    display: block;
    bottom: -0.5rem;
    height: 1px;
    width: 100%;
    transform: scaleX(0);
    transform-origin: left;
    background-color: #7000ff;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;
