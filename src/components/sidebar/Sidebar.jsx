import React from "react";
import {
  SidebarContainer,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
} from "./Sidebar.element";
import { useTranslation } from "react-i18next";

const Sidebar = ({ isOpen, toggle }) => {
  const { t } = useTranslation();
  
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <SidebarWrapper>
          <SideBtnWrap>
            <SidebarRoute to="sc_qABwer tOUyTS" onClick={toggle} spy={true} smooth={true} duration={500}>{t("sidebar.about")}</SidebarRoute>
            <SidebarRoute to="sc_qPRwer tODyUCT" onClick={toggle} spy={true} smooth={true} duration={500}>{t("sidebar.products")}</SidebarRoute>
            <SidebarRoute to="sc_qCOwer tNTyACT" onClick={toggle} spy={true} smooth={true} duration={500}>{t("sidebar.contact")}</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
