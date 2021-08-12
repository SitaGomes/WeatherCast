import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;

    height: 100vh;
    width: 100vw;
`

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

export const AsideContainer = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: center;



`