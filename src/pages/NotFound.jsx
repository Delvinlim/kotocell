import React from "react";
import Page404 from "../components/404/Page404";
import { useDarkMode } from "../components/hooks/useDarkMode";
import { darkTheme, lightTheme } from "../components/Themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/GlobalStyles";

const NotFound = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Page404 />
      </ThemeProvider>
    </>
  );
};

export default NotFound;
