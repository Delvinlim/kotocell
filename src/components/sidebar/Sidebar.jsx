import React from "react";
import {
  SidebarContainer,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
} from "./Sidebar.element";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <SidebarWrapper>
          <SideBtnWrap>
            <SidebarRoute to="sc_qABwer tOUyTS" onClick={toggle} spy={true} smooth={true} duration={500}>About</SidebarRoute>
            <SidebarRoute to="sc_qPRwer tOJyECT" onClick={toggle} spy={true} smooth={true} duration={500}>Projects</SidebarRoute>
            <SidebarRoute to="sc_qCOwer tNTyACT" onClick={toggle} spy={true} smooth={true} duration={500}>Contact</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
