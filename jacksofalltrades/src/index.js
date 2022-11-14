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
import './ui-components/darkMode.css';

import './ui-components/About-Us.css';
import { useDarkMode } from './pages/darkMode';

Amplify.configure(config)

//Calls app.js and renders all the grpahics using amplify and react
const root = ReactDOM.createRoot(document.getElementById("root"));  

root.render(
  <div
  style={{
    width: '100vw',
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