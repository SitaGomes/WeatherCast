import { createContext, useCallback } from "react"
import { ThemeProvider } from "styled-components"

import {ChildrenProps, ThemeProps} from "Types/Interfaces"
import { DefaultTheme } from "styled-components"

import { useLocalState } from "Hooks/useLocalState" 

import light from "Styles/Themes/light"
import dark from "Styles/Themes/dark"

export const ThemeContext = createContext({} as ThemeProps)

export function ThemeContextProvider ({children}: ChildrenProps) {

    const [theme, setToogleTheme] = useLocalState<DefaultTheme>("theme", light)

    const ToogleTheme = useCallback(() => {
        setToogleTheme(theme.tittle === "light" ? dark : light)

    }, [theme, setToogleTheme]) 
    
    //! The function will run even when not called, beacuse with every render it re-creates the function
    /*
        Solution is to use "useMemo" or "useCallback", they both keep the function's pointer 

        useMemo => keeps the function's pointer in the memory, but transforms the function in variable 
        
        useCallback => does the same thing, but the function remains a function
    */

    return(
        <ThemeProvider theme={theme}>
            <ThemeContext.Provider value={{theme, ToogleTheme}}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    )
}