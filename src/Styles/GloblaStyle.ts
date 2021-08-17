import {createGlobalStyle} from "styled-components";

export const Global =  createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        transition: ease-out 0.3s;
    }
    
    body{
        background-color: #008DAC;
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
            background: rgba(0,0,0,0);
        }
        
    }

    .menu-open{
        @media only screen and (max-width: 830px){
            width: 100%;
            padding: 20px;
            background-color: #52A2B4;

        }

    }

    .push{
        @media only screen and (max-width: 830px){
            background-color: rgba(0,0,0,0);

            margin-right: 3rem;
        }
    }

`