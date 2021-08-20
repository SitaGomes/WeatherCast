import {createGlobalStyle} from "styled-components";

export const Global =  createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        transition: ease-out 0.3s;
    }
    
    body{
        background: white;
        color: white;
        font-family: 'Lato', sans-serif;
    }

    .roboto{
        font-family: 'Roboto', sans-serif;
    }

`