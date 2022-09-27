import '../styles/globals.css'

import {Amplify} from 'aws-amplify'
import config from '../src/aws-exports'

import {AmplifyProvider} from '../node_modules/@aws-amplify/ui-react'
//import { Component } from 'react';
import {studioTheme} from '../src/ui-components'

import '@aws-amplify/ui-react/styles.css';

Amplify.configure(config)

function App({Component, pageProps}) {
  return <AmplifyProvider theme={studioTheme}><Component {...pageProps}/></AmplifyProvider>;
  }

export default App;
