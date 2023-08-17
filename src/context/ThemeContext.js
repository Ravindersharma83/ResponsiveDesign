import React, { createContext, useContext, useState } from 'react';
import { defaultTheme } from '../styles/colors.js';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState(defaultTheme);

  const changeTheme = (theme) => {
    console.log('them',theme);
    setActiveTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ activeTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
