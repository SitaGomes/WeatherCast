import {createGlobalStyle} from "styled-components";

export const Global =  createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }

    body{
        background: #969696;
        color: white;
        font-family: 'Lato', sans-serif;
    }

    .roboto{
        font-family: 'Roboto', sans-serif;
    }
`