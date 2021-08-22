import styled from "styled-components";
import heroImage from "Assets/Images/heroImage.jpg"

export const HomeContainer = styled.main`

    background: no-repeat center/cover url(${heroImage});
    
    height: 100vh;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    position: relative;

`

//! Dark and Light Mode
export const ToogleMode = styled.div`
    border-radius: 50%;

    margin: 25px 25px 0 0;
    border: none;

    display: flex;
    align-self: end;
`


//! Main Weather info
export const TempContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 40px 0;
    
    gap: 20px;
    
    
    @media only screen and (max-width: 35rem) {
        margin: 10px;
    }
    
`

export const TodaysWeather = styled.div`
    display: flex;
    align-items: center;
    
    gap: 30px;
    
    @media only screen and (max-width: 35rem) {
        flex-direction: column;
        gap: 0;
    }
`

export const MinMaxTemp = styled.div`
    text-align: center;
    font-size: 1.5rem;

`

export const NormalTemp = styled.div`
    text-align: center;

    .normal-temp{
        font-size: 10rem;
    }

    @media only screen and (max-width: 35rem) {
        .normal-temp{
            font-size: 7rem;
        }
    }

`

//! Extra weather details

export const ExtraContentContainer = styled.section`
    max-width: 1000px;
    width: 100%;

    text-align: center;

    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};

    border-radius: 50px 50px 0 0;

    padding: 10px;

`
