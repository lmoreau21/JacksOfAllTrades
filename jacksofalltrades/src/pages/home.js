import React, { Component } from 'react';

import {Amplify} from 'aws-amplify'
import config from '../aws-exports'
import {AmplifyProvider} from '@aws-amplify/ui-react'
import {studioTheme, HomeFinal} from '../ui-components'
import '@aws-amplify/ui-react/styles.css'


Amplify.configure(config)

//display the home incon using studiotheme
class home extends Component{
  render() {
    return (
      <div style={{width:"100vw"}}>
      <AmplifyProvider theme={studioTheme}>
        <HomeFinal/>
      </AmplifyProvider>
      </div>
    );
  }
}

export default home;