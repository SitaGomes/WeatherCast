import { useState, FormEvent} from "react";
import {useSpring} from "react-spring";
import Swicth from "react-switch"
import {
  WeatherDetails,
  HomeContainer, MinMaxTemp, NormalTemp, TempContainer, TodaysWeather, ToogleMode,
} from "./Styles"

import { ExtraWeatherContent } from "Components/ExtraWeatherContent";
import { SearchCity } from "Components/SearchCity"
import {MoonSVG} from "Components/Moon/index"
import {SunSVG} from "Components/Sun/index"
import { Loading } from "Components/Loading";


import {useWeatherContext} from "Hooks/useWeatherContext"
import {useThemeContext} from "Hooks/useThemeContext"
import { useStyledThemeContext } from "Hooks/useStyledThemeContext";

// var axios = require("axios").default;

export function Home() {

  const [searchedName, setSearchedName] = useState("")

  const {colors} = useStyledThemeContext()
  const {theme, ToogleTheme} = useThemeContext()
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



  async function verifyCityName(e: FormEvent) {
    e.preventDefault()
    
    if (searchedName.trim() === "") return
    
    setSearchedName("")
    setLoading(true)
    setCityName(searchedName.toUpperCase())

  }

  const fadeDown = useSpring({
    to: {opacity: 1, y: 0},
    from: {opacity: 0, y: -50},
  })

  const growDown = useSpring({
    from: {width: 150 },
    to: {width: 50}
  })


  /**
   *   useEffect(() => {

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
   */


  return (
    <HomeContainer>
      {/* Dark | Light mode */}
      <ToogleMode
        style={growDown}
      >
        <Swicth 
          onChange={ToogleTheme}
          checked={theme.tittle === "light"}
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                color: "white",
                paddingRight: 2
              }}
            >
              <SunSVG />
            </div>
          }
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                color: "white",
                paddingRight: 2
              }}
            >
              <MoonSVG />
            </div>
          }
          offColor={colors.icon}
          onColor={colors.icon}
          height={30}
          width={60}
          handleDiameter={35}
        />
      </ToogleMode>
      
      <form
        onSubmit={(e) => verifyCityName(e)}
      >

        {/* Input search */}
        <SearchCity 
          type="text"
          placeholder="Search City..."
          onChange={(e) => setSearchedName(e.target.value)}
        />

      </form>
      
      {/* Temp info */}
      <TempContainer
        style={fadeDown}
      >
        {loading ? (<Loading/>) : (
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
      <WeatherDetails
        style={fadeDown}
      >

        {loading ? (<Loading/>) : (
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
        
      </WeatherDetails>
    
    </HomeContainer>
  );
}

