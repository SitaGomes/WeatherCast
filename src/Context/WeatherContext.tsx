import { useEffect, useState } from "react";
import { createContext } from "react";
import { ChildrenProps, ExtraWeatherContent, OpenWeatherContextProps, Weather } from "../Types/Interfaces";

export const OpenWeatherContext = createContext({} as OpenWeatherContextProps)
var axios = require("axios").default;

export function WeatherContext ({children}: ChildrenProps) {

    const [cityName, setCityName] = useState("Contagem")
    localStorage.setItem("cityName", `${cityName}`)

    const [loading, setLoading] = useState(true)

    const [wrongCityName, setWrongCityName] = useState(false)

    
    const [extraWeatherContent, setExtraWeatherContent] = useState({} as ExtraWeatherContent)
    const [minTemp, setMinTemp] = useState(0)
    const [maxTemp, setMaxTemp] = useState(0)
    const [normalTemp, setNormalTemp] = useState(0)

    
    
    useEffect(() => {
        
        const oldCityName = localStorage.getItem("cityName")
        if (oldCityName != null){
            setCityName(oldCityName)
        }

        console.log(oldCityName)
        
        const weatherOptions = {
            method: 'GET',
            url: 'https://community-open-weather-map.p.rapidapi.com/weather',
            params: {
              q: `${cityName}`,
            },
            headers: {
              'x-rapidapi-key': 'ee81247291mshbc5c014c9004f6ap1aec40jsn151c7de80dc1',
              'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
            }
        };

        const getWeather = async () => {
    
            try{

    
                const { data }: Weather = await axios.request(weatherOptions)
                
                //* Filtering
                const weatherContent: ExtraWeatherContent = {
                feels_like: Math.floor(data.main.feels_like - 273.15),
                pressure: data.main.pressure,
                wind_speed: data.wind.speed,
                cloudiness: data.clouds.all,          
                main_weather: data.weather[0].main,
                weather_condition: data.weather[0].description,
                }
                
                setExtraWeatherContent(weatherContent)
                
                
                setMaxTemp(Math.floor(data.main.temp_max - 273.15))
                
                setMinTemp(Math.floor(data.main.temp_min - 273.15))
                
                setNormalTemp(Math.floor(data.main.temp - 273.15))
                
                
                setLoading(false)
                setWrongCityName(false) //! Return's to default state 
            
            } catch (err) {
    
                setLoading(false)
                setWrongCityName(true)
            }
        }

        getWeather()

    }, [cityName])

    return(
        <OpenWeatherContext.Provider 
            value={{
                cityName, 
                extraWeatherContent,
                loading,
                maxTemp,
                minTemp,
                normalTemp,
                wrongCityName,
                setCityName,
                setLoading,
            }}
        >
            {children}
        </OpenWeatherContext.Provider>
    )
}