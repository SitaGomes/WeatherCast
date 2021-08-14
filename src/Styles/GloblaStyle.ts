import {createGlobalStyle} from "styled-components";

export const Global =  createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }
    
    body{
        background-color: #969696;
        color: white;
        font-family: 'Lato', sans-serif;
    }

    .roboto{
        font-family: 'Roboto', sans-serif;
    }

    .menu-close{

        @media only screen and (max-width: 830px){
            width: 0px;
            margin: 0px;
        }
        
    }

    .menu-open{
        @media only screen and (max-width: 830px){
            width: 330px;
            padding: 20px;
        }
  
        @media only screen and (max-width: 330px){
            width: 100%;
        }

    }

`