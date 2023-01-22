import React from 'react';
import { Container } from './styles';
import { useThemeHook } from '../../context/themeHook';
import { Moon, Sun } from 'phosphor-react';
import { darkTheme, lightTheme } from '../../styles/Theme';

export function ButtonTheme() {
    const { isDarkMode, handleDarkMode } = useThemeHook();
    return (
        <Container onClick={handleDarkMode} style={{ backgroundColor: isDarkMode ? lightTheme.colors.primary : darkTheme.colors.primary, color: isDarkMode ? lightTheme.colors.text : darkTheme.colors.text }} >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </Container>
    );
}