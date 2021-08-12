export interface Weather {
    data: {

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