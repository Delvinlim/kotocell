import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  /* background: #0d0d0d; */
  background: #212121;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  bottom: -70px;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const SidebarWrapper = styled.div`
  color: #fff;
  margin: 30px 0 0;
`;

export const SideBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkScroll)`
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  padding: 20px 0;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  display: inline-block;
  margin: auto;

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
  /* padding: 16px 64px; */
  /* border-radius: 10px;
  background: #01bf71;
  white-space: nowrap;
  margin: 15px 30px;
  padding: 16px 64px;
  color: #010606;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  } */
`;
