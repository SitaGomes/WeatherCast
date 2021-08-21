import styled from "styled-components";

const LittleExtraContent = styled.div`
    display: flex;
    justify-content: space-around;

    color: #100;

    padding: 10px 0;

    &:hover{
        filter: brightness(200%);
    }
`

export function ExtraWeatherContent({name, values}: any) {

    console.log(name, values)
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
                values = `${values} m/s`
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