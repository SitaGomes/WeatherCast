import { useContext } from 'react';
import { ThemeContext } from "Context/ThemeContext"

export function useThemeContext() {
    const value = useContext(ThemeContext)

    return value
}