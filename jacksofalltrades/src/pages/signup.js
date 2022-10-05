import React from 'react';

import '../App.css';

import {Amplify} from 'aws-amplify'
import config from '../aws-exports'
import {AmplifyProvider} from '@aws-amplify/ui-react'
import {studioTheme, Signup} from '../ui-components'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(config)

const signup = () => {
  return (
    <AmplifyProvider theme={studioTheme}>
      <Signup/>
    </AmplifyProvider>
  );
};

export default signup;
/*
import { Auth } from 'aws-amplify';

async function signUp() {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,          // optional
                phone_number,   // optional - E.164 number convention
                // other custom attributes 
            },
            autoSignIn: { // optional - enables auto sign in after user is confirmed
                enabled: true,
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}
*/