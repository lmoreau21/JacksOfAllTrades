
import React, { Component } from 'react';

import {Amplify} from 'aws-amplify'
import config from '../aws-exports'

import {studioTheme, SkillList} from '../ui-components'
import '@aws-amplify/ui-react/styles.css'
import { withAuthenticator, Button, Heading, AmplifyProvider } from '@aws-amplify/ui-react';

Amplify.configure(config)

//When skilldisplay is called it will generate the skillist react graphic
class SkillDisplay extends Component{
  render() {
    return (
      //adds additional styling to the page
      <div style=
      {{width:"100%", padding: "30px", display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage:"linear-gradient(45deg, rgba(167,83,83,1), rgba(167,153,153,1))"}}
      >
      <AmplifyProvider theme={studioTheme} > 
        <SkillList/>
      </AmplifyProvider>
      </div>
    );
  }
}
//withAuthenticator forces the user to be signed in to see this page
export default withAuthenticator(SkillDisplay);