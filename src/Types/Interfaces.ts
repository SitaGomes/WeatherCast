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
    main_weather: string,
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
        main_weather: string
    },
    wrongCityName: boolean,
    //! Don't touch pls 👇
    setCityName: Dispatch<SetStateAction<string>>, 
    setLoading: Dispatch<SetStateAction<boolean>>,
}

export type BgImageProps = {
    clear: string,
    dust: string,
    thunderstorm: string,
    drizzle: string,
    haze: string,
    sand: string,
    mist: string,
    rain: string,
    snow: string,
    tornado: string,
    squall: string,
    smoke: string,
}
