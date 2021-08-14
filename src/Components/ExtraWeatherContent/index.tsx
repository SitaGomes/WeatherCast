import styled from "styled-components";

const LittleExtraContent = styled.div`
    display: flex;
    justify-content: space-between;

    color: #e2e2e2;

    padding: 10px 13px;

    &:hover{
        filter: brightness(200%);
        border: 1px solid #dddddd;
        border-radius: 10px;
    }
`

export function ExtraWeatherContentChildren({name, values}: any) {

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
    }}

    redo()

    return(
        <LittleExtraContent>
            <div>{name}</div>
            <div>{values}</div>
        </LittleExtraContent>
    )
}