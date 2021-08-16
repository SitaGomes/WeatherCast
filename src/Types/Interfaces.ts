import { BgImageContext } from '../Context/BgImageContext';
import { Dispatch, ReactChild, SetStateAction } from "react";

export interface Weather {
    data: {
        clouds:{
            all: number
        },
        main: {
            humidity: number;
            pressure: number;
            temp: number;
            temp_max: number;
            temp_min: number;
            feels_like: number;
        },
        weather: {
            0: {
                main: string;
                description: string;   
            }
        },
        wind: {
            speed: number;
            deg: number;
            gust: number;
        }
    }

}

export interface ExtraWeatherContent {
    feels_like: number,
    pressure: number,
    cloudiness?: number, 
    weather_condition: string,
    wind_speed: number,
}

export interface ChildrenProps {
    children: ReactChild
}

export interface OpenWeatherContextProps {
    cityName: string,
    normalTemp: number,
    minTemp: number,
    maxTemp: number,
    loading: boolean,
    extraWeatherContent: {
        feels_like: number,
        pressure: number,
        cloudiness?: number, 
        weather_condition: string,
        wind_speed: number,
    },
    wrongCityName: boolean,
    //! Don't touch pls 👇
    setCityName: Dispatch<SetStateAction<string>>, 
    setLoading: Dispatch<SetStateAction<boolean>>,

}

export interface BgImageContextProps {
    bgPhoto: string
}