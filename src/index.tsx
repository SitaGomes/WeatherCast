import React from 'react';
import ReactDOM from 'react-dom';

import {Home} from 'Pages/Home/index';

import {Global as GlobalCss} from "Styles/GloblaStyle"

import {WeatherContext as WeatherProvider} from "Context/WeatherContext"
import {ThemeContextProvider} from "Context/ThemeContext"

ReactDOM.render(
  <React.StrictMode>

  <WeatherProvider>
    <ThemeContextProvider>

        <>
          <Home />
          <GlobalCss />
        </>
        
    </ThemeContextProvider>
  </WeatherProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

