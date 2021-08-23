import {createGlobalStyle} from "styled-components";

export const Global =  createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
        transition: background 300ms ease-out, color 100ms ease-out;
    }
    
    body{
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.color};
        font-family: 'Lato', sans-serif;
    }

    .roboto{
        font-family: 'Roboto', sans-serif;
    }

    .icon{
        width: 20px;

        margin: auto 0;
    }

`