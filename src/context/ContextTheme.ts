
import { createContext } from 'react';
import { ThemeTypes } from '../types/Theme';
interface ThemeContextData  {
  theme: ThemeTypes;
  isDarkMode: boolean;
  handleDarkMode: () => void;
}


export const ContextTheme = createContext<ThemeContextData>({} as ThemeContextData);



