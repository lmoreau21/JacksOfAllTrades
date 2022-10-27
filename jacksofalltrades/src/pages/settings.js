import React from 'react';

import {Amplify} from 'aws-amplify'
import config from '../aws-exports'
import {AmplifyProvider} from '@aws-amplify/ui-react'
import {studioTheme, Settingspage} from '../ui-components'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(config)


const Settings = () => {
    return (
        <AmplifyProvider theme={studioTheme}>
          <Settingspage/>
        </AmplifyProvider>
      );
    }
    
    export default Settings;