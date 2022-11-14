
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
      <div 
      className='background'
      style=
      {{width:"100%", padding: "30px", display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
}}
      >
      <SkillList/>
      
      </div>
    );
  }
}
//withAuthenticator forces the user to be signed in to see this page
export default withAuthenticator(SkillDisplay);