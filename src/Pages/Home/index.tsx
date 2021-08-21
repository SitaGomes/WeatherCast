import { useState, FormEvent} from "react";
import {
  ExtraContentContainer,
  HomeContainer, MinMaxTemp, NormalTemp, TempContainer, TodaysWeather, ToogleMode,

} from "./Styles"

import MapICon from "Assets/SVG/MapIcon.svg"
import Moon from "Assets/SVG/moon.svg"
import Sun from "Assets/SVG/sun.svg"

import { ExtraWeatherContent } from "Components/ExtraWeatherContent";
import { SearchCity } from "Components/SearchCity"

import {useWeatherContext} from "Hooks/useWeatherContext"
import { useEffect } from "react";

var axios = require("axios").default;
export function Home() {

  const [searchName, setSearchName] = useState("")
  
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


  }, [searchName])


  return (
    <HomeContainer>
      {/* Dark | Light mode */}
      <ToogleMode>
        <img src={Sun} alt="Dark and Light mode toogle" />
      </ToogleMode>
      
      <form
        onSubmit={(e) => changeName(e)}
      >

        {/* Input search */}
        <SearchCity 
          type="text"
          placeholder="Search City..."
          onChange={(e) => setSearchName(e.target.value)}
        />

      </form>
      
      {/* Temp info */}
      <TempContainer>
        {loading ? (<div>Loading...</div>) : (
          <>     
            
            {wrongCityName ? (<div>City not found</div>) : (
              
              <>
          
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
                
              </>

            )} 
      
          </>
        )}

      </TempContainer>

      {/* Weather Details */}
      <ExtraContentContainer>

        {loading ? (<div>Loading...</div>) : (
          <>

            {wrongCityName ? (<div>City not found</div>) : (
              
              <>

                <h1>Weather Details</h1>
        
                {/* Loop */}
                {Object.entries(extraWeatherContent).map((key, values) => {
                  return(
                    <ExtraWeatherContent 
                      key={values}
                      name={key[0]}
                      values={key[1]}
                    />
                )})}
              
              </>

            )}

          </>
        )}
        
      </ExtraContentContainer>
    
    </HomeContainer>
  );
}

