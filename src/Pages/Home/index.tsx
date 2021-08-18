import { useState, FormEvent} from "react";
import {
  HomeContainer,
  MinMaxTemp,
  AsideContainer,
  NormalTemp,
  TempContainer,
  TempInformation,
  FormContainer,
  SearchButton,
  WeatherExtraContent,
  OpenMenuBtn,
  CloseMenuBtn,
} from "./Styles"

import MapICon from "../../Assets/SVG/MapIcon.svg"
import Times from "../../Assets/SVG/Times.svg"
import Hamburguer from "../../Assets/SVG/Hamburguer.svg"

import { Strock } from "../../Components/Stroke";
import { Tittle } from "../../Components/Tittle";
import { ExtraWeatherContentChildren } from "../../Components/ExtraWeatherContent";
import { SearchCity } from "../../Components/SearchCity"

import {useWeatherContext} from "../../Hooks/useWeatherContext"
import { useEffect } from "react";

var axios = require("axios").default;
export function Home() {

  const [openMenu, setToogleMenu] = useState(false)
  const [searchName, setSearchName] = useState("")
  
  const bgImages: any = {
    Clear: "https://images.unsplash.com/photo-1558418294-9da149757efe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Thunderstorm: "https://images.unsplash.com/photo-1429552077091-836152271555?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGh1bmRlcnN0b3JtfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Dust: "https://images.unsplash.com/photo-1520632587893-f4e855502ca3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Sand: "https://images.unsplash.com/photo-1500285426772-410d8f2243d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2FuZHxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Squall: "https://images.unsplash.com/photo-1621924123226-01ca69c08e29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdpbmR8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Rain: "https://images.unsplash.com/photo-1509635022432-0220ac12960b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Haze: "https://images.unsplash.com/photo-1533708985023-a9726305e9c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGF6ZXxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Snow: "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c25vd3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Tornado: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG9ybmFkb3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Smoke: "https://images.unsplash.com/photo-1542789828-6c82d889ed74?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c21va2V8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Mist: "https://images.unsplash.com/photo-1581713872605-b9dfbc84eaa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWlzdHxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Drizzle: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Clouds: "https://images.unsplash.com/photo-1491226669704-7d90b66ad115?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3Vkc3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  }
  
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


  async function changeName(e: FormEvent) {
    e.preventDefault()
    
    if (searchName.trim() === "") return
    
    setLoading(true)
    setCityName(searchName.toUpperCase())
    setToogleMenu(false)

  }

  useEffect(() => {

    const citiesApi = {
      method: 'GET',
      url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
      params: {
        limit: '5', 
        namePrefix: `${searchName}`
      },
      headers: {
        'x-rapidapi-key': '9ee2a2d7eamshe86b9bb88e0be56p1da44djsn48f0509e062e',
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
      }
    };

    const getCitiesApi = async () => {

      const resp = await axios.request(citiesApi)

      console.log(resp)
    }

    getCitiesApi()

  }, [searchName])


  return (
    <HomeContainer>
      
      {/* Today's weather conditions */}
      <TempContainer
        className={openMenu ? "push" : ""}
        style={{
          backgroundImage: `url(${bgImages[`${extraWeatherContent.main_weather}`]})`,
          color: ``
        }
      }
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
            id="autocomplete"
            type="text" 
            placeholder="Search city" 
            onChange={(e) => setSearchName(e.target.value)}
          
          />

          <SearchButton>
            <img src={MapICon} alt="search for cities name" />
          </SearchButton>

        </FormContainer>

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

