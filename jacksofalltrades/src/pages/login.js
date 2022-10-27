
import React from 'react';

import {Amplify} from 'aws-amplify'
import config from '../aws-exports'
import {AmplifyProvider} from '@aws-amplify/ui-react'
import {studioTheme,Login} from '../ui-components'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(config)
//not in used
const login = () => {
  return (
    <AmplifyProvider theme={studioTheme}>
      <Login/>
    </AmplifyProvider>
  );
}

export default login;
