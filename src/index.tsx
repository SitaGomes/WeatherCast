import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from './Pages/Home/index';
import {Global as GlobalCss} from "./Styles/GloblaStyle"
import {WeatherContext as WeatherProvider} from "./Context/WeatherContext"
import {BackgroundImage as BgImageProvider} from "./Context/BgImageContext"

ReactDOM.render(
  <React.StrictMode>
    
  <WeatherProvider>
     <BgImageProvider>
      <>
        <Home />
        <GlobalCss />
      </>
     </BgImageProvider>
  </WeatherProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

