import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import "../assets/fontawsome/css/all.css";
import { ModeBtn } from "../ui/btns";

// Base theme sizes that stay the same regardless of the mode
const baseTheme = {
  sizes: {
    xs: 'var(--sizes-xs)',
    sm: 'var(--sizes-sm)',
    med: 'var(--sizes-med)',
    lg: 'var(--sizes-lg)',
    xl: 'var(--sizes-xl)',
    xxl: 'var(--sizes-xxl)',
    card: 'var(--sizes-card)',
    borderRadius: 'var(--sizes-border-radius)',
  },
};

const lightTheme = {
  color: {
    primary: 'var(--color-white)',
    secondary: 'var(--color-secondary)',
    tertiary: 'var(--color-tertiary)',
    font: 'var(--color-black)',
    warning: 'var(--color-warning)',
    darker: 'var(--color-contrast-darker)',
    dark: 'var(--color-contrast-dark)',
    light: 'var(--color-contrast-light)',
    black: 'var(--color-black)',
    border: 'var(--color-contrast-dark)',
    bg: 'var(--color-sky)',
    nav: 'var(--color-secondary-light-theme)',
    navContrast: 'var(--color-contrast-light-theme)',
    grad1: 'var(--color-gradient1-light-theme)',
    grad2: 'var(--color-gradient2-light-theme)',
    grad3: 'var(--color-gradient3-light-theme)',
    fade: 'rgba(255, 255, 255, 0.158)',
  },
};

const darkTheme = {
  color: {
    primary: 'var(--color-dark-grey)',
    secondary: 'var(--color-secondary)',
    tertiary: 'var(--color-tertiary)',
    font: 'var(--color-white)',
    warning: 'var(--color-warning)',
    darker: 'var(--color-contrast-darker)',
    dark: 'var(--color-contrast-dark)',
    light: 'var(--color-contrast-light)',
    black: 'var(--color-black)',
    border: 'var(--color-blue-dark)',
    bg: 'var(--color-black)',
    nav: 'var(--color-secondary)',
    navContrast: 'var(--color-contrast-dark-theme)',
    grad1: '#031a23',
    grad2: '#080410',
    grad3: '#021127',
    fade: 'rgba(0, 0, 0, 0.7)',
  },
};

export const Theme = ({ children }) => {

  const [themeMode, setThemeMode] = useState("dark");

  const toggleTheme = () => {
    setThemeMode(prev => (prev === "light" ? "dark" : "light"));
  };

  // Merge the base theme with the current theme's colors
  const currentTheme = {
    ...baseTheme,
    ...(themeMode === "light" ? lightTheme : darkTheme)
  };

  return (
    <ThemeProvider theme={currentTheme}>
        <ModeBtn aria-label="Toogle between dark and light mode" onClick={toggleTheme} style={{ margin: "1rem" }}>
          {themeMode === "light" ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
        </ModeBtn>
        {children}
    </ThemeProvider>
  );
};

export default Theme;
