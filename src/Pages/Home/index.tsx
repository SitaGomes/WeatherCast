import { useState } from "react";
import {
  CityTittle,
  HomeContainer,
  MinMaxTemp,
  NormalTemp,
  TempContainer,
  TempInformation
} from "./Styles"

export function Home() {

  const [cityName, setCityName] = useState("New York")
  const [minTemp, setMinTemp] = useState(10)
  const [maxTemp, setMaxTemp] = useState(30)
  const [normalTemp, setNormalTemp] = useState(20)

  return (
    <HomeContainer>
      {/* Today's weather conditions */}
      <TempContainer>

        {/* City's name */}
        <CityTittle className="roboto">{cityName} | HOJE</CityTittle>

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
      <aside>

        {/* Search city's name */}
        <form></form>

        {/* Recent searched city's */}
        <div></div>

        {/* Wind pressure, humiduty, cloudy */}
        <div></div>

      </aside>
    
    </HomeContainer>
  );
}

