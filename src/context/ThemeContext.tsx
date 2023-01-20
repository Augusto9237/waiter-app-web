
import { ReactPropTypes, createContext, useState } from 'react';
import { ThemeTypes } from '../types/Theme';
import { darkTheme, lightTheme } from '../styles/Theme';
interface ThemeContextData  {
  theme: ThemeTypes;
  isDarkMode: boolean;
}


export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);


export const ThemeContexProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeTypes>(lightTheme);
  const [isDarkMode, setIsDarkMode] = useState(false);


  return(
    <ThemeContext.Provider
     value={{
      theme,
      isDarkMode,
     }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
