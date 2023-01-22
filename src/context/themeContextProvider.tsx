import { ReactNode, useEffect, useState } from "react";
import { ContextTheme } from "./ContextTheme";
import { lightTheme, darkTheme } from "../styles/Theme";

interface IProps{
    children: ReactNode;
}

export const ThemeContexProvider = ({children}:IProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const currentTheme = isDarkMode ? darkTheme : lightTheme;

    useEffect(() => {
      const themelocal = localStorage.getItem('theme');
      if(!themelocal){
        return;
      }
      setIsDarkMode(JSON.parse(themelocal!));
    }, []);
  
    function handleDarkMode() {
      setIsDarkMode(!isDarkMode);
      localStorage.setItem("theme",JSON.stringify(!isDarkMode));
  }

    return(
      <ContextTheme.Provider
       value={{
        theme: currentTheme,
        isDarkMode,
        handleDarkMode,
       }}
      >
      {children}
      </ContextTheme.Provider>
    );
  };