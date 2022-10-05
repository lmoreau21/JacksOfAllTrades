import React from 'react';

import '../App.css';

import {Amplify} from 'aws-amplify'
import config from '../aws-exports'
import {AmplifyProvider} from '@aws-amplify/ui-react'
import {studioTheme, Homepage} from '../ui-components'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(config)

const home = () => {
  return (
    <AmplifyProvider theme={studioTheme}>
      <Homepage/>
    </AmplifyProvider>
  );
}

export default home;