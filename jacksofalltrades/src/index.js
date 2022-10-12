import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import config from './aws-exports'
import Amplify from 'aws-amplify';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import { Login, studioTheme } from './ui-components';

Amplify.configure(config)

ReactDOM.render(
  <div
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
  >
    <AmplifyProvider theme={studioTheme}>
      <App />  
    </AmplifyProvider>
  </div>,
  document.getElementById('root')
);  

reportWebVitals();
/*

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Login} from '../src/ui-components';

root.render(
  <React.StrictMode>
    <A/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { Login } from '../src/ui-components';

export default function Home(){
  return(
    <div>
      <Login/>
    </div>
  )
}
*/