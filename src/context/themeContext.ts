
import { createContext } from 'react';
import { ThemeTypes } from '../types/Theme';
interface ThemeContextData  {
  theme: ThemeTypes;
  isDarkMode: boolean;
  handleDarkMode: () => void;
}

export const INITIAL_STATE = {};

export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);



