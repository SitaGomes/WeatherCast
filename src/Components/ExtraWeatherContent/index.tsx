import styled from "styled-components";

const LittleExtraContent = styled.div`
    display: flex;
    justify-content: space-around;

    color: ${props => props.theme.colors.text};

    padding: 10px 0;

    @media only screen and (max-width: 35rem) {
        padding: 6px 0;
    }
`

export function ExtraWeatherContent({name, values}: any) {

    const redo = () => {
        switch (name) {
            case "feels_like":
                name = "Feels Like"
                values = `${values}ºC`
                return

            case "cloudiness":
                name = "Cloudiness"
                values = `${values}%`
                return

            case "wind_speed":
                name = "Wind Speed"
                values = `${Math.floor(values)} k/h`
                return

            case "pressure":
                name = "Pressure"
                values = `${values} mb`
                return

            case "weather_condition":
                name = "Weather Condition"
                return
            
            case "main_weather":
                name = "Weather"
    }}

    redo()

    return(
        <LittleExtraContent>
            <div>{name}</div>
            <div>{values}</div>
        </LittleExtraContent>
    )
}