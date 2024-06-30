import React, { createContext, useState } from 'react';
import { darkTheme, lightTheme } from '../pages/constant/Theme';

const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    console.log('================================');
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  console.log(theme,'jkjkjkjkj');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
