import { useEffect } from "react";
import { useState, FormEvent } from "react";
import {
  HomeContainer,
  MinMaxTemp,
  AsideContainer,
  NormalTemp,
  TempContainer,
  TempInformation
} from "./Styles"

import {
  Weather
} from "../../Types/Interfaces"

var axios = require("axios").default;

const CitiesOptions = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
  headers: {
    'x-rapidapi-key': '9ee2a2d7eamshe86b9bb88e0be56p1da44djsn48f0509e062e',
    'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
  }
};

axios.request(CitiesOptions).then(function (response: any) {
	console.log(response.data);
}).catch(function (error: string) {
	console.error(error);
});

export function Home() {

  const [loading, setLoading] = useState(true)
  
  const [searchName, setSearchName] = useState("")
  const [cityName, setCityName] = useState("New York")
  
  const [minTemp, setMinTemp] = useState(0)
  const [maxTemp, setMaxTemp] = useState(0)
  const [normalTemp, setNormalTemp] = useState(0)


  function changeName(e: FormEvent) {
    e.preventDefault()

    if (searchName.trim === undefined) return

    setCityName(searchName.toUpperCase())

  }

  
  useEffect(() => {

    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: {
        q: `${cityName}`,
      },
      headers: {
        'x-rapidapi-key': '9ee2a2d7eamshe86b9bb88e0be56p1da44djsn48f0509e062e',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
      }
    };

    const getWeather = async () => {

      const { data }: Weather = await axios.request(options)

      setMaxTemp(Math.floor(data.main.temp_max - 273.15))

      setMinTemp(Math.floor(data.main.temp_min - 273.15))

      setNormalTemp(Math.floor(data.main.temp - 273.15))

      console.log(data.main)

    }

    getWeather()

  }, [cityName])


  return (
    <HomeContainer>
      {/* Today's weather conditions */}
      <TempContainer>

        {/* City's name */}
        <h3 className="roboto">{cityName} | HOJE</h3>

        {/* Min, Normal, Max temperature */}
        <TempInformation>
        
          {/* Min */}
          <MinMaxTemp>{ minTemp }ºC</MinMaxTemp>

          {/* Normal */}
          <NormalTemp className="roboto">{ normalTemp }ºC</NormalTemp>

          {/* Max */}
          <MinMaxTemp>{ maxTemp }ºC</MinMaxTemp>
        
        </TempInformation>

      </TempContainer>
    
      {/* Extra content */}
      <AsideContainer>

        {/* Search city's name */}
        <form
          onSubmit={(e) => changeName(e)}
        >
          <input 
            type="text" 
            placeholder="city's name" 
            onChange={(e) => setSearchName(e.target.value)}
          
          />
          <button>Aqui</button>
        </form>

        {/* Recent searched city's */}
        <div></div>

        {/* Wind pressure, humiduty, cloudy */}
        <div></div>

      </AsideContainer>
    
    </HomeContainer>
  );
}

