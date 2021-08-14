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
  SearchButton,
  WeatherExtraContent,
  RecentCities,
  OpenMenuBtn,
  CloseMenuBtn,
} from "./Styles"

import {
  ExtraWeatherContent,
  Weather
} from "../../Types/Interfaces"

import MapICon from "../../Assets/SVG/MapIcon.svg"
import Times from "../../Assets/SVG/Times.svg"
import Hamburguer from "../../Assets/SVG/Hamburguer.svg"

import { Strock } from "../../Components/Stroke";
import { Tittle } from "../../Components/Tittle";
import { ExtraWeatherContentChildren } from "../../Components/ExtraWeatherContent";

var axios = require("axios").default;


export function Home() {

  const [openMenu, setToogleMenu] = useState(true)

  const recentSearchedCities: string[] = ["London"]

  const [extraWeatherContent, setExtraWeatherContent] = useState({} as ExtraWeatherContent)

  const [wrongCityName, setWrongCityName] = useState(false)

  const [loading, setLoading] = useState(true)
  
  const [searchName, setSearchName] = useState("")
  const [cityName, setCityName] = useState("New York")
  
  const [minTemp, setMinTemp] = useState(0)
  const [maxTemp, setMaxTemp] = useState(0)
  const [normalTemp, setNormalTemp] = useState(0)


  async function changeName(e: FormEvent) {
    e.preventDefault()
    
    if (searchName.trim() === "") return
    
    setLoading(true)
    setCityName(searchName.toUpperCase())

  }

  function ToogleMenu() {setToogleMenu(!openMenu)}

  
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
        
        //* Filtering
        const weatherContent: ExtraWeatherContent = {
          feels_like: Math.floor(data.main.feels_like - 273.15),
          pressure: data.main.pressure,
          wind_speed: data.wind.speed,
          cloudiness: data.clouds.all,          
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


  return (
    <HomeContainer>
      
      {/* Today's weather conditions */}
      <TempContainer
        className={openMenu ? "push" : ""}
      > 
        {
          loading ? (
            <>
              <h1>Loading...</h1>
            </>
          ) : (
            <>

              <OpenMenuBtn  
                onClick={() => setToogleMenu(true)}
                >
                <img src={Hamburguer} alt="open menu" />
              </OpenMenuBtn>
              
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
      <AsideContainer
        className={openMenu ? "menu-open" : "menu-close"}
      >

        <CloseMenuBtn
          onClick={() => setToogleMenu(false)}
        >
          <img src={Times} alt="close Menu" />
        </CloseMenuBtn>

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

        <Strock />

        {/* Recent searched city's */}
        <RecentCities>
          
          <Tittle>
            Recently Searched:
          </Tittle>

          {recentSearchedCities.map(city => {
            return(
              <p
                key={city}
              >
                {city}
              </p>
            )
          })}
        </RecentCities>

        <Strock/>
        {/* Wind pressure, humiduty, cloudy */}
        <WeatherExtraContent>

          <Tittle>
            Weather Details:
          </Tittle>

          {Object.entries(extraWeatherContent).map((keys, values) => {
            return(
              <ExtraWeatherContentChildren
                key={values}
                name={keys[0]}
                values={keys[1]}
              />
            )
          })}
        </WeatherExtraContent>

      </AsideContainer>
    
    </HomeContainer>
  );
}

