import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from './Pages/Home/index';
import {Global as GlobalCss} from "./Styles/GloblaStyle"
import {WeatherContext as WeatherProvider} from "./Context/WeatherContext"

ReactDOM.render(
  <React.StrictMode>
    
  <WeatherProvider>
      <>
        <Home />
        <GlobalCss />
      </>
  </WeatherProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

