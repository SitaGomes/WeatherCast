import { useContext } from 'react';
import {OpenWeatherContext} from "../Context/WeatherContext"

export function useWeatherContext () {

    const value = useContext(OpenWeatherContext)

    return value
} 