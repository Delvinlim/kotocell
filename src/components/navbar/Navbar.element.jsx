import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 999;
  ${mobile({ height: "50px" })}
  font-family: "JetBrains Mono","Fira Code",monospace;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 10px 20px;
  max-width: 1200px;
  /* max-width: 120rem; */
  margin: auto;
`;

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  /* border: 1px solid blue; */
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: 600;
  /* width: 35px; */
  /* margin-bottom: 10px; */
  /* border: 1px solid blue; */
`;

export const Language = styled.span`
  font-size: 16px;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({ display: "none" })}
`;

export const RightWrapper = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuItem = styled(LinkScroll)`
  font-size: 16px;
  padding: 10px 15px;
  margin-right: 15px;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  display: inline-block;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #e82e2e;
    transition: width 0.3s;
  }

  &:hover {
    &::after {
      width: 100%;
      transition: width 0.3s;
    }
  }

  ${mobile({ display: "none" })}
`;

export const LinkWrapper = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  padding: 10px;
  ${mobile({ marginRight: "20px" })}
`;

export const Button = styled.div`
  --width: 110px;
  --height: 40px;
  --tooltip-height: 35px;
  --tooltip-width: 90px;
  --gap-between-tooltip-to-button: calc(var(--tooltip-height) + 3px);
  --button-color: #e82e2e;
  /* --button-color: #1163ff; */
  --tooltip-color: #fff;
  width: var(--width);
  height: var(--height);
  /* background: var(--button-color); -> purple :#e82e2e */
  border: 1px solid var(--button-color);
  position: relative;
  text-align: center;
  border-radius: 0.45em;
  font-family: "JetBrains Mono", "Fira Code", monospace;
  transition: background 0.3s;
  ${mobile({ width: "80px", height: "40px" })}

  &::before {
    position: absolute;
    content: attr(data-tooltip);
    width: var(--tooltip-width);
    height: var(--tooltip-height);
    background-color: var(--tooltip-color);
    font-size: 0.9rem;
    color: #111;
    border-radius: 0.25em;
    line-height: var(--tooltip-height);
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px);
    left: calc(50% - var(--tooltip-width) / 2);
  }

  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: var(--tooltip-color);
    left: calc(50% - 10px);
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 10px);
  }

  &::before,
  &::after {
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;
  }

  &:hover {
    background: #e82e2e;
  }

  &:hover > div > div {
    top: -100%;
  }

  &:hover > div > span {
    top: 0;
  }

  &:hover {
    &::before,
    &::after {
      opacity: 1;
      visibility: visible;
    }
    &::before {
      bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
    }
    &::after {
      bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);
    }
  }
`;

export const ButtonWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  font-size: 16px;
`;

export const ButtonText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transition: top 0.5s;
`;

export const DownloadIcon = styled.span`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: #fff;
  top: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: top 0.5s;
`;

export const NavMenu = styled.div`
  display: none;
  ${mobile({ display: "block" })}
`;
