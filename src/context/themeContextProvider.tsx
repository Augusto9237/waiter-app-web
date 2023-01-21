import { ReactNode, useReducer, useState } from "react";
import { ThemeTypes } from "../types/Theme";
import { INITIAL_STATE, ThemeContext } from "./ThemeContext";
import { lightTheme, darkTheme } from "../styles/Theme";

interface IProps{
    children: ReactNode;
}

export const ThemeContexProvider = ({children}:IProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const currentTheme = isDarkMode ? darkTheme : lightTheme;
  
    function handleDarkMode() {
      setIsDarkMode(!isDarkMode);
  }

    return(
      <ThemeContext.Provider
       value={{
        theme: currentTheme,
        isDarkMode,
        handleDarkMode,
       }}
      >
      {children}
      </ThemeContext.Provider>
    );
  };