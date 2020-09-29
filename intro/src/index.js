import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'    //bunu ekliyoruz projeye hem reactstrap hem bootstrap kullanabiliyoruz 
import 'alertifyjs/build/css/alertify.min.css'   //alertify importing 
import {BrowserRouter} from 'react-router-dom'     //------------ burası ve strict modedaki app i browser router içine al

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter> <App /> </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
