import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const AboutContainer = styled.div`
  padding: 0px 20px;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  /* height: 100vh; */
  overflow-x: hidden;
  /* border: 1px solid yellow; */
  ${mobile({ padding: "0" })}
`;

export const AboutContainerWrapper = styled.div`
  /* border: 1px solid blue; */
  max-width: 1200px;
  margin: auto;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 3;
`;

export const AboutTitle = styled.h1`
  /* font-size: 2.4rem; */
  font-size: 42px;
  margin-bottom: 0px;
  /* position: relative; */
  ${mobile({ fontSize: "32px" })}
`;

export const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ flexDirection: "column" })}
  ${tablet({ flexDirection: "column" })}
`;

export const Content = styled.div`
  flex: 2;
  max-width: 60%;
  ${mobile({ maxWidth: "100%" })}
  ${tablet({ maxWidth: "100%" })}
`;

export const Paragraph = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  ${mobile({ fontSize: "14px" })}
`;

export const QuotesContainer = styled.div`
  /* border: 1px solid aqua; */
  padding: 20px 10px;
  margin: 40px 10px 10px;
  display: flex;
  justify-content: center;
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}
`;

export const Quotes = styled.span`
  cursor: pointer;
  font-weight: 600px;
  font-style: italic;
  font-size: 1.5rem;
  transition: all 0.4s;

  &:hover {
    padding-bottom: 5px;
    border-bottom: 3px solid #e82e2e;
  }

  ${mobile({ fontSize: "16px" })}
`;

export const ImageContent = styled.div`
  /* display: flex; */
  flex: 1;
  width: 30%;
  margin-left: 30px;
  ${mobile({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginLeft: "0",
  })}
  ${tablet({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginLeft: "0",
  })}
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 30px;
  /* height: 100px; */
  border: 2px solid transparent;
  box-shadow: 0 0 1rem transparent;
  transition: all 0.4s;
  &:hover {
    box-shadow: 0 0 2rem #e82e2e;
  }

  ${mobile({ width: "30%" })}
  ${tablet({ width: "30%" })}
`;

export const ImageQuotesContainer = styled.div`
  display: none;
  ${mobile({
    display: "flex",
    justifyContent: "center",
    padding: "10px",
  })}
  ${tablet({
    display: "flex",
    justifyContent: "center",
    padding: "10px",
  })}
`;

export const AboutSkills = styled.div``;

export const SkillTitle = styled.h1`
  /* font-size: 2.4rem; */
  font-size: 42px;
  margin-bottom: 0px;
  ${mobile({ fontSize: "32px" })}
`;

export const Skill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
`;

export const SkillLogo = styled.img`
  /* border: 1px solid yellow; */
  width: 50px;
  height: 50px;
  padding: 5px 20px;
  transition: all 0.4s;
`;

export const LogoSpan = styled.span`
  text-align: center;
  position: relative;
  transition: all 0.4s;
  &:hover {
    & > img {
      box-shadow: 0 0 0.5rem #e82e2e;
    }
    & > span {
      opacity: 1;
      box-shadow: 0 0 0.5rem #e82e2e;
    }
  }
`;

export const LogoTitle = styled.span`
  transition: all 0.4s;
  /* display: none; */
  opacity: 0;
  font-size: 12px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 0 5px;
  /* line-height: 10px; */
  border-radius: 5px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
`;

export const SkillContainer = styled.div`
  /* display: flex;
  /* justify-content: center;
  flex-direction: column;
  padding: 10px 0px; */
`;

export const AboutSocial = styled.span``;

export const AboutWhyUsContainer = styled.div``;

export const AboutWhyUsTop = styled.span`
  display: flex;
  justify-content: center;
  font-size: 36px;
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 600;
  ${mobile({ fontSize: "28px" })}
`;

export const AboutWhyUsBottom = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
`;

export const AboutWhyUsBoxTopText = styled.span`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 24px;
`;

export const AboutWhyUsBoxBottomText = styled.span`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 24px;
`;

export const AboutWhyUsBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const AboutWhyUsBox = styled.div`
  width: 180px;
  height: 180px;
  /* border: 1px solid blue; */
  position: relative;
`;

export const AboutWhyUsImage = styled.img`
  width: 100%;
  opacity: 0.2;
  border-radius: 12px;
`;

export const AboutWhyUsText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  color: ${({ theme }) => theme.text};
`;
