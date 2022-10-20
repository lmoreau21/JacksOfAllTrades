
import React from 'react';

import {Amplify} from 'aws-amplify'
import config from '../aws-exports'
import {AmplifyProvider} from '@aws-amplify/ui-react'
import {studioTheme, SkillList} from '../ui-components'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(config)

const SkillDisplay = () => {

  return (
    <div style={{width:"100%", padding: "30px", display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'}}>
    <AmplifyProvider theme={studioTheme}>
      <SkillList/>
    </AmplifyProvider>
    </div>
  );
}

export default SkillDisplay;
/*
import { AmplifyTheme } from 'aws-amplify-react-native';

const MySectionHeader = Object.assign({}, AmplifyTheme.sectionHeader, { background: 'orange' });
const MyTheme = Object.assign({}, AmplifyTheme, { sectionHeader: MySectionHeader });

<Authenticator theme={MyTheme} />

export default withAuthenticator(App);
*/