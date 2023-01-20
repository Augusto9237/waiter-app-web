import { createContext } from 'react';
import { ThemeTypes } from '../types/Theme';

interface ThemeContextProps {
    lightTheme: ThemeTypes;
    darkTheme: ThemeTypes;
    toggleTheme: () => void;
  }

export const ThemeContext = createContext<'light' | 'dark'>('light');