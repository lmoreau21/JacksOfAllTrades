
import React from 'react';

import {Amplify} from 'aws-amplify'
import config from '../aws-exports'

import {studioTheme, SkillList} from '../ui-components'
import '@aws-amplify/ui-react/styles.css'
import { withAuthenticator, Button, Heading, AmplifyProvider } from '@aws-amplify/ui-react';

Amplify.configure(config)

const SkillDisplay = () => {

  return (
    <div style=
    {{width:"100%", padding: "30px", display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage:"linear-gradient(45deg, rgba(167,83,83,1), rgba(167,153,153,1))"}}>
    <AmplifyProvider theme={studioTheme}>
      <SkillList/>
    </AmplifyProvider>
    </div>
  );
}

export default withAuthenticator(SkillDisplay);
/*
import { AmplifyTheme } from 'aws-amplify-react-native';

const MySectionHeader = Object.assign({}, AmplifyTheme.sectionHeader, { background: 'orange' });
const MyTheme = Object.assign({}, AmplifyTheme, { sectionHeader: MySectionHeader });

<Authenticator theme={MyTheme} />

export default withAuthenticator(App);
*/