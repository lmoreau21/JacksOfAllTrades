
import React from 'react';

import {Amplify} from 'aws-amplify'
import config from '../aws-exports'
import {AmplifyProvider} from '@aws-amplify/ui-react'
import {studioTheme, SkillList, SkillProfile} from '../ui-components'
import '@aws-amplify/ui-react/styles.css'

//import getSkillProfile from './graphql/queries.js'
Amplify.configure(config)

const SkillDisplay = ( {item, index, items, overrideItems, props}) => {
  
  //const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  
  return (
    <AmplifyProvider theme={studioTheme}>
      <SkillProfile
        skillprofile={item}
        {...(overrideItems && overrideItems({ item, index }))}
      ></SkillProfile>
    </AmplifyProvider>
  );

  
}

export default SkillDisplay;