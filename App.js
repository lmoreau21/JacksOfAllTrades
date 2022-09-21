import logo from './logo.svg';
import './App.css';

import {Amplify} from 'aws-amplify'
import config from '../src/aws-exports'

import {AmplifyProvider} from '@aws-amplify/ui-react'
import { Component } from 'react';
import {studioThem} from '../src/ui-components'

import '@aws-amplify/ui-react/styles.css'

Amplify.configure(config)

function App() {
  return (
    <AmplifyProvider theme={studioTheme}><Component {...pageProps}/></AmplifyProvider>)
}

export default App;
