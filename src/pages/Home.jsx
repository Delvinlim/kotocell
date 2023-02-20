import React, { useState, useEffect } from "react";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { Fade } from "react-reveal";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import Contact from "../components/contact/Contact";
import Loader from "../components/loader/Loader";
import Project from "../components/project/Project";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../components/hooks/useDarkMode";
import { darkTheme, lightTheme } from "../components/Themes";
import { GlobalStyles } from "../components/GlobalStyles";
import Toggle from "../components/Toggler/Toggler";
import Products from "../components/products/Products";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [load, setLoad] = useState(true);
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

  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 5500);
    return () => clearTimeout(timer);
  }, []);

  if (!mountedComponent) return <div />
  return (
    // ContactSendButtonLoader
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles/>
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          {show && (
            <Fade top>
              <Navbar isOpen={isOpen} toggle={toggle} />
              <Toggle theme={theme} toggleTheme={themeToggler} />
            </Fade>
          )}
          <Hero />
          <About />
          <Products />
          {/* <Project /> */}
          <Contact />
          <Footer />
        </>
        {/* {load ? (
          <Loader />
        ) : (
        )} */}
      </ThemeProvider>
    </>
  );
};

export default Home;
