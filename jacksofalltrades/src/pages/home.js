import React from 'react';

import {Amplify} from 'aws-amplify'
import config from '../aws-exports'
import {AmplifyProvider} from '@aws-amplify/ui-react'
import {studioTheme, Home} from '../ui-components'
import '@aws-amplify/ui-react/styles.css'


Amplify.configure(config)

const home = () => {
  return (
    <div style={{width:"100vw"}}>
    <AmplifyProvider theme={studioTheme}>
      <Home/>
    </AmplifyProvider>
    </div>
  );
}

export default home;