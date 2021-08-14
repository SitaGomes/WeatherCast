import styled from "styled-components";



export const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;

    height: 100vh;
    width: 100vw;
`

//! Main Section
export const TempContainer = styled.main`
    text-align: center;
    flex: 1;

    margin: auto 20px;

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

`

//! Aside Section
export const AsideContainer = styled.aside`
    display: flex;
    flex-direction: column;

    width: 320px;
    margin: 20px 1rem;
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
