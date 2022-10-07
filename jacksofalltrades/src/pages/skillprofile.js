
import React from 'react';

import '../App.css';

import {Amplify} from 'aws-amplify'
import config from '../aws-exports'
import {AmplifyProvider} from '@aws-amplify/ui-react'
import {studioTheme, SkillList, SkillProfile} from '../ui-components'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(config)

const SkillDisplay = () => {
  return (
    <AmplifyProvider theme={studioTheme}>
      <SkillProfile/>
    </AmplifyProvider>
  );
}

export default SkillDisplay;