import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from './Pages/Home/index';
import {Global} from "./Styles/GloblaStyle"

ReactDOM.render(
  <React.StrictMode>
    <Home />

    <Global></Global>
  </React.StrictMode>,
  document.getElementById('root')
);

