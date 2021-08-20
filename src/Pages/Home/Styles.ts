import styled from "styled-components";
import heroImage from "Assets/Images/heroImage.jpg"

export const HomeContainer = styled.main`

    background: no-repeat center/cover url(${heroImage});
    
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

//! Main Weather info
export const TempContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 40px 0;

    gap: 20px;

`
export const TodaysWeather = styled.div`
    display: flex;
    align-items: center;

    gap: 30px;
`

export const MinMaxTemp = styled.div`
    text-align: center;
    font-size: 1.4rem;

`

export const NormalTemp = styled.div`
    text-align: center;

    .normal-temp{
        font-size: 7rem;
    }

`

//! Extra weather details

export const ExtraContentContainer = styled.section`
    max-width: 1000px;
    width: 100%;

    text-align: center;

    background: #FFF9;
    color: #000;
`
