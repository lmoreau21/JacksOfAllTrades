
import React from 'react';

import '../App.css';

import {Amplify} from 'aws-amplify'
import config from '../aws-exports'
import {AmplifyProvider} from '@aws-amplify/ui-react'
import {studioTheme,Login} from '../ui-components'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(config)

const login = () => {
  return (
    <AmplifyProvider theme={studioTheme}>
      <Login/>
    </AmplifyProvider>
  );
}

export default login;
/*
import { AmplifyTheme } from 'aws-amplify-react-native';

const MySectionHeader = Object.assign({}, AmplifyTheme.sectionHeader, { background: 'orange' });
const MyTheme = Object.assign({}, AmplifyTheme, { sectionHeader: MySectionHeader });

<Authenticator theme={MyTheme} />

export default withAuthenticator(App);
*/