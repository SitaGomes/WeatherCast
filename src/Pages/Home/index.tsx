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

import MapICon from "../../Assets/SVG/MapIcon.svg"
import Times from "../../Assets/SVG/Times.svg"
import Hamburguer from "../../Assets/SVG/Hamburguer.svg"

import { Strock } from "../../Components/Stroke";
import { Tittle } from "../../Components/Tittle";
import { ExtraWeatherContentChildren } from "../../Components/ExtraWeatherContent";

import {useWeatherContext} from "../../Hooks/useWeatherContext"
import {useBgImageContext} from "../../Hooks/useBgImageContext"


export function Home() {
  
  const {
    cityName,
    extraWeatherContent,
    loading,
    maxTemp,
    minTemp,
    normalTemp,
    wrongCityName,
    setCityName,
    setLoading,
  } = useWeatherContext()
  
  const {bgPhoto} = useBgImageContext()
  
  const [openMenu, setToogleMenu] = useState(false)
  const recentSearchedCities: string[] = ["London"]
  const [searchName, setSearchName] = useState("")

  async function changeName(e: FormEvent) {
    e.preventDefault()
    
    if (searchName.trim() === "") return
    
    setLoading(true)
    setCityName(searchName.toUpperCase())
    setToogleMenu(false)

  }


  return (
    <HomeContainer>
      
      {/* Today's weather conditions */}
      <TempContainer
        className={openMenu ? "push" : ""}
        style={{backgroundImage: `url(${bgPhoto})`}}
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

