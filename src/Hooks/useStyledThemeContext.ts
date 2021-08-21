import { useContext } from 'react';
import { ThemeContext as ThemeStyledContext } from 'styled-components';

export function useStyledThemeContext() {
    const value = useContext(ThemeStyledContext)

    return value
}