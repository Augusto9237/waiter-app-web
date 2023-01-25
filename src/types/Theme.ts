import { DefaultTheme } from "styled-components";

export interface ThemeTypes extends DefaultTheme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    border: string;
    text: string;
    buttonPrimary: string;
    buttonSecondary: string;
  };
  supportingColors: {
    primary: string;
    secondary: string;
    terciary: string;
  };
}
