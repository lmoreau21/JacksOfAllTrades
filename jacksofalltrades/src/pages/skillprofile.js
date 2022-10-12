
import React from 'react';

import {Amplify} from 'aws-amplify'
import config from '../aws-exports'
import {AmplifyProvider} from '@aws-amplify/ui-react'
import {studioTheme, SkillList, SkillProfile} from '../ui-components'
import '@aws-amplify/ui-react/styles.css'
import { Skillprofile } from '../models';
//import getSkillProfile from './graphql/queries.js'
Amplify.configure(config)

const SkillDisplay = ({Skillprofile}) => {
  return (
    <AmplifyProvider theme={studioTheme}>
      <SkillProfile/>
    </AmplifyProvider>
  );
}

export default SkillDisplay;