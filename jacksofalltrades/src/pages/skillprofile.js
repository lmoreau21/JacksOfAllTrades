
import * as React from 'react';

import {Amplify} from 'aws-amplify'
import config from '../aws-exports'
import {AmplifyProvider} from '@aws-amplify/ui-react'
import {studioTheme, SkillList, SkillProfile} from '../ui-components'
import '@aws-amplify/ui-react/styles.css'
import { useParams } from 'react-router-dom';

import { Skillprofile } from '../models';

import {getSkillprofile} from '../graphql/queries.js'
//import {QueryClient, QueryClientProvider} from 'react-query';

Amplify.configure(config)
function SkillDisplay() {
  //const [user, setUser] = React.useState(null)
  //const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  //const skillID = useParams<URLSearchParams>().skillid;
  const {skillid} = useParams()
  
  
  return (
    <div className = "Profile">
    <AmplifyProvider theme={studioTheme}>
      <SkillProfile
          item = {skillid}
         //{...(overrideItems && overrideItems({ item, index }))}
      ></SkillProfile>
    </AmplifyProvider>
    </div>
  );

  
}

export default SkillDisplay;