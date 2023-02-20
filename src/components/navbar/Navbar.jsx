import React from "react";
import { useTranslation } from "react-i18next";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
  Button,
  ButtonText,
  ButtonWrapper,
  Container,
  ContainerWrapper,
  DownloadIcon,
  // Language,
  LeftWrapper,
  LinkWrapper,
  Logo,
  MenuItem,
  NavMenu,
  RightWrapper,
} from "./Navbar.element";
// import logo from "./../img/logo192.png";
import logo from "./../img/Logo Light.png";
import resume from "./../../docs/KOTOCELL.pdf";
import Language from "../language/Language";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = ({ isOpen, toggle }) => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 769) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  
  useEffect(() => {
    handleResize()
  }, [])
  
  return (
    <Container>
      <ContainerWrapper>
        <LeftWrapper>
          {/* <Logo src={logo} /> */}
          <Logo>{isMobile ? "K" : "Kotocell"}</Logo>
          <Language />
          {/* <Language>EN</Language> */}
        </LeftWrapper>
        <RightWrapper>
          <MenuItem
            to="sc_qABwer tOUyTS"
            spy={true}
            smooth={true}
            duration={500}
          >
            {t("navbar.about")}
          </MenuItem>
          <MenuItem
            to="sc_qPRwer tODyUCT"
            spy={true}
            smooth={true}
            duration={500}
          >
            {t("navbar.products")}
          </MenuItem>
          <MenuItem
            to="sc_qCOwer tNTyACT"
            spy={true}
            smooth={true}
            duration={500}
          >
            {t("navbar.contact")}
          </MenuItem>
          <LinkWrapper
            href={resume}
            download="Kotocell Brochure"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button data-tooltip="Size: 20Mb">
              <ButtonWrapper>
                <ButtonText>{t("navbar.brochure")}</ButtonText>
                <DownloadIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1.5em"
                    height="1.5em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                    ></path>
                  </svg>
                </DownloadIcon>
              </ButtonWrapper>
            </Button>
          </LinkWrapper>
          <NavMenu onClick={toggle}>
            {isOpen ? (
              <CloseOutlinedIcon style={{ fontSize: 28 }} />
            ) : (
              <MenuOutlinedIcon style={{ fontSize: 28 }} />
            )}
          </NavMenu>
        </RightWrapper>
      </ContainerWrapper>
    </Container>
  );
};

export default Navbar;
