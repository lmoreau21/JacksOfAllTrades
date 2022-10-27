import React from 'react';


import {Amplify} from 'aws-amplify'
import config from '../aws-exports'
import {AmplifyProvider} from '@aws-amplify/ui-react'
import {studioTheme, Signup} from '../ui-components'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(config)

//not in use
const signup = () => {
  return (
    <AmplifyProvider theme={studioTheme}>
      <Signup/>
    </AmplifyProvider>
  );
};

export default signup;