import styled from "styled-components";
import { mobile, tablet } from "../../responsive";
import { Link as LinkRouter } from "react-router-dom";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

export const ProjectContainer = styled.div`
  padding: 0px 20px;
  display: flex;
  /* height: 100vh; */
  overflow-x: hidden;
  justify-content: center;
  ${mobile({ padding: "0" })}
`;

export const ProjectContainerWrapper = styled.div`
  max-width: 1200px;
  /* padding: 10px 20px; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* flex: 3; */
  /* gap: 10px; */
  /* ${mobile({ padding: "10px 20px" })} */
`;

export const ProjectTitle = styled.h1`
  text-align: center;
  font-size: 42px;
  ${mobile({ fontSize: "32px;" })}
`;

export const ProjectWrapper = styled.div`
  display: flex;
  margin: 10px 0 30px;
  ${mobile({ flexDirection: "column" })}
  ${tablet({ flexDirection: "column" })}
`;

export const ProjectImageWrapper = styled.div`
  flex: 1.1;
  border: 1px solid gray;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin-right: 20px;
  border-radius: 14px;
  /* max-height: 30rem; */
  position: relative;
  overflow-y: hidden;
  /* transition: all 0.3s; */
  ${mobile({ width: "100%", maxHeight: "200px", marginBottom: "20px", flex: "1" })}

  &:hover > img {
    filter: blur(0.6rem);
  }

  &:hover > div {
    opacity: 1;
  }
`;

export const ProjectImage = styled.img`
  object-fit: cover;
  display: block;
  width: 100%;
  /* height: 100%; */
  position: relative;
  animation-name: projectOverview;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.69, 0.63, 0.73, 1.24);
  transition: all 0.4s;
  /* transform: translateY(50%); */

  @keyframes projectOverview {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(30%);
    }

    100% {
      transform: translateY(0);
    }
  }
`;

export const ProjectLink = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
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
`;

export const Repo = styled.a``;

export const Link = styled.a``;

export const ProjectInfo = styled.div`
  flex: 1.9;
  position: relative;
  ${mobile({ flex: "0"})}
`;

export const ProjectType = styled.h5`
  margin: 0;
  color: #e82e2e;
`;

export const ProjectName = styled.h3`
  cursor: pointer;
  font-size: 28px;
  margin: 5px 0 10px;
`;

export const ProjectDescription = styled.p`
  margin: 5px 0;
  line-height: 20px;
  font-weight: 600;
`;

export const ProjectFeatures = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100px;
  flex-wrap: wrap;
  ${mobile({ height: "auto" })}
  ${mobile({ width: "100%" })}
`;

export const ProjectFeature = styled.span`
  display: flex;
  align-items: center;
  /* margin: 0; */
  padding: 0;
  margin: 3px 0;
  transition: 0.3s all ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateX(10px);

    & > h5 {
      color: #e82e2e;
    }
  }
  /* ${mobile({ flexDirection: "0" })} */
`;

export const ProjectFeatureIcon = styled(ChevronRightOutlinedIcon)`
  color: #e82e2e;
`;

export const ProjectFeatureName = styled.h5`
  margin: 5px 0px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

export const ProjectStacks = styled.div`
  position: absolute;
  bottom: 0;
  ${mobile({ position: "relative", marginTop: "10px" })}
`;

export const ProjectStack = styled.span`
  font-size: 14px;
  margin: 0 20px 0 0;
  color: #aaa;
`;

export const ProjectButtonContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

export const ProjectButton = styled(LinkRouter)`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  width: 12rem;
  height: auto;

  &:hover {
    & > span .icon.arrow {
      background: #fff;
      transform: translate(1rem, 0);
    }
    & > span + span {
      color: #e82e2e;
    }
  }
`;

export const Circle = styled.span`
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  /* background: #282936; */
  border-radius: 1.625rem;
  & .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
  }
  & .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
  }
`;

export const Arrow = styled.span`
  &::after {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg);
  }
`;

export const Text = styled.span`
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 0;
  color: #282936;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
`;
