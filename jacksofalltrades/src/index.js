import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import config from './aws-exports'
import Amplify from 'aws-amplify';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import { Login, studioTheme } from './ui-components';

Amplify.configure(config)

const root = ReactDOM.createRoot(document.getElementById("root"));  
root.render(
  <div
  style={{
    width: '100vw',
    padding: '0px',
    backgroundColor: "#D3D3D3",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <AmplifyProvider theme={studioTheme}>
      <App />  
    </AmplifyProvider>
  </div>
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