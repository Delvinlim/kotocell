import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import Navbar from "../components/navbar/Navbar";
import Toggle from "../components/Toggler/Toggler";
import { useDarkMode } from "../components/hooks/useDarkMode";
import { darkTheme, lightTheme } from "../components/Themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/GlobalStyles";
import ProjectList from "../components/project/ProjectList";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const controlNavbar = () => {
    window.scrollY < 5 ? setShow(true) : setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  if (!mountedComponent) return <div />
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles/>
        {/* {show && (
          <Fade top>
            <Navbar isOpen={isOpen} toggle={toggle} />
            <Toggle theme={theme} toggleTheme={themeToggler} />
          </Fade>
        )} */}
        <ProjectList/>
      </ThemeProvider>
    </>
  );
};

export default Projects;
