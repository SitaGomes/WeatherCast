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

    margin: 20px 2rem;

`

export const FormContainer = styled.form`
    background: none;
    border: none;

    border-bottom: 1px solid #8A8A8A;
    text-align: center;

    margin: 0px 1rem;

`

export const SearchCity = styled.input`
    border: none;
    background: none;

    text-align: center;


`
export const SearchButton = styled.button`
    border: none;
    background: none;

    width: 12px;

`

