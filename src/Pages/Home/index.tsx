import { useEffect } from "react";
import { useState, FormEvent } from "react";
import {
  HomeContainer,
  MinMaxTemp,
  AsideContainer,
  NormalTemp,
  TempContainer,
  TempInformation,
  SearchCity,
  FormContainer,
  SearchButton
} from "./Styles"

import {
  Weather
} from "../../Types/Interfaces"

import MapICon from "../../Assets/SVG/MapIcon.svg"

var axios = require("axios").default;


export function Home() {

  const [wrongCityName, setWrongCityName] = useState(false)

  const [loading, setLoading] = useState(true)
  
  const [searchName, setSearchName] = useState("")
  const [cityName, setCityName] = useState("New York")
  
  const [minTemp, setMinTemp] = useState(0)
  const [maxTemp, setMaxTemp] = useState(0)
  const [normalTemp, setNormalTemp] = useState(0)


  async function changeName(e: FormEvent) {
    e.preventDefault()
    setLoading(true)

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

      try{
        const { data }: Weather = await axios.request(options)
        
        setLoading(false)
        setWrongCityName(false) //! Return Default state 
  
        setMaxTemp(Math.floor(data.main.temp_max - 273.15))
  
        setMinTemp(Math.floor(data.main.temp_min - 273.15))
  
        setNormalTemp(Math.floor(data.main.temp - 273.15))
  
        console.log(data.main)
      
      } catch (err) {

        setLoading(false)
        setWrongCityName(true)
      
      }


    }

    getWeather()

  }, [cityName])


  return (
    <HomeContainer>
      {/* Today's weather conditions */}
      <TempContainer> 
        {
          loading ? (
            <>
              <h1>Loading...</h1>
            </>
          ) : (
            <>
              
              {wrongCityName ? (
                <>
                  <h1>City not found</h1>
                </>
              ): (
                <>
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
                </>
              )}

            </>
          )
        }
      </TempContainer>
    
      {/* Extra content */}
      <AsideContainer>

        {/* Search city's name */}
        <FormContainer
          onSubmit={(e) => changeName(e)}
        >
          <SearchCity 
            type="text" 
            placeholder="city's name" 
            onChange={(e) => setSearchName(e.target.value)}
          
          />
          <SearchButton>
            <img src={MapICon} alt="search for cities name" />
          </SearchButton>
          
        </FormContainer>

        {/* Recent searched city's */}
        <div></div>

        {/* Wind pressure, humiduty, cloudy */}
        <div></div>

      </AsideContainer>
    
    </HomeContainer>
  );
}

