import { useState, FormEvent} from "react";
import {
  ExtraContentContainer,
  HomeContainer, MinMaxTemp, NormalTemp, TempContainer, TodaysWeather,

} from "./Styles"

import MapICon from "Assets/SVG/MapIcon.svg"

import { ExtraWeatherContent } from "Components/ExtraWeatherContent";
import { SearchCity } from "Components/SearchCity"

import {useWeatherContext} from "Hooks/useWeatherContext"
import { useEffect } from "react";

var axios = require("axios").default;
export function Home() {

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

  console.log(extraWeatherContent)


  async function changeName(e: FormEvent) {
    e.preventDefault()
    
    if (searchName.trim() === "") return
    
    setSearchName("")
    setLoading(true)
    setCityName(searchName.toUpperCase())

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
      {/* Dark | Light mode */}
      <div></div>
      
      {/* Input search */}
      <SearchCity 
        type="text"
        placeholder="Search City..."
      />
      
      {/* Temp info */}
      <TempContainer>
        {loading ?? (<div>Loading...</div>)}

        {/* City's name */}
        <h1
          className="roboto"
        >
            {cityName} | TODAY
        </h1>

        <TodaysWeather>

          {/* Min temp */}
          <MinMaxTemp>
            <div>Min</div>
            
            <div>
              {minTemp}ºC
            </div>
          </MinMaxTemp>

          {/* Normal temp */}
          <NormalTemp>

            <div className="normal-temp roboto">
              {normalTemp}ºC
            </div>
          
          </NormalTemp>

          {/* Max temp */}
          <MinMaxTemp>
            <div>Max</div>
            
            <div>
              {maxTemp}ºC
            </div>
          
          </MinMaxTemp>

        </TodaysWeather>

      </TempContainer>
      
      {/* Weather Details */}
      <ExtraContentContainer>
        
        <h1>Weather Details</h1>

        {/* Loop */}
        {Object.entries(extraWeatherContent).map((values, keys) => {
          <ExtraWeatherContent 
            key={values}
            name={keys}
            values={keys}
          />
        })}
      </ExtraContentContainer>
    
    </HomeContainer>
  );
}

