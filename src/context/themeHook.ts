import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const useThemeHook = () => {
    const contextTheme = useContext(ThemeContext);
    
    return contextTheme;
};