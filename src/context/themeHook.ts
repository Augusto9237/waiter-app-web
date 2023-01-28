import { useContext } from "react";
import { ContextTheme } from "./ContextTheme";
export const useThemeHook = () => {
    const contextTheme = useContext(ContextTheme);
    
    return contextTheme;
};