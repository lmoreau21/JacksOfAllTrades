import React from 'react';

import {Amplify} from 'aws-amplify'
import config from '../aws-exports'
import {AmplifyProvider} from '@aws-amplify/ui-react'
import {studioTheme, Settingspage} from '../ui-components'
import '@aws-amplify/ui-react/styles.css'
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import { Component } from 'react';
Amplify.configure(config)

//displays settingspage using studio theme
class Settings extends Component{
  render() {
    return (
        <AmplifyProvider theme={studioTheme}>
          <Settingspage/>
        </AmplifyProvider>
      );
    }
}

//withAuthenticator forces the user to be signed in to see this page
export default withAuthenticator(Settings);