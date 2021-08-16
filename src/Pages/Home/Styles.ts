import styled from "styled-components";


export const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
    
    height: 100vh;
    width: 100vw;
    
    
`

//! Main Section
export const TempContainer = styled.main`
    color: #00417D;

    height: 100vh;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;    
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    text-align: center;
        
    border-radius: 0px 0.8em 0.8em 0px;

    position: relative;

`

export const TempInformation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;


    gap: 1rem;

`

export const MinMaxTemp = styled.div`
    font-size: 1.3rem;
`


export const NormalTemp = styled.div`
    font-size: 7rem;

    @media only screen and (max-width: 830px){
        font-size: 5rem;
    }

`


//! Hamburguer and Times
export const OpenMenuBtn = styled.span`
    background: none;
    display: none;
    
    @media only screen and (max-width: 830px){
        width: 20px;
        display: block;

        position: absolute;

        top: 40px;
        right: 50px;
 

    }

`

export const CloseMenuBtn = styled.span`
    background: none;
    display: none;
    
    @media only screen and (max-width: 830px){
        width: 20px;
        display: block;

    }

`


//! Aside Section
export const AsideContainer = styled.aside`
    width: 360px;
    margin: 20px 1rem;
    transition: 0.5s;
    

    @media only screen and (max-width: 830px){
        margin: 0;

        background-color: #969696; 
        height: 100%;
        width: 0; /* 0 width - change this with JavaScript */
        z-index: 1; 
        
        
        position: fixed; 
        top: 0;
        right: 0;
        overflow-x: hidden;
        
    }


`

export const FormContainer = styled.form`
    background: none;
    border: none;

    text-align: center;

    margin: 0px 1rem;

`

export const SearchCity = styled.input`
    border: none;
    background: none;
    text-align: center;
    padding: 5px;

    color: white;

    width: 95%;


`
export const SearchButton = styled.button`
    border: none;
    background: none;

    width: 12px;

    cursor: pointer;

`


export const RecentCities = styled.div`
    margin: 1em 0px;
`

export const WeatherExtraContent = styled.div`
    
    margin: 1em 0px;

`
