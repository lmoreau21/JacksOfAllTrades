/*
import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome, I hope that this works!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react-v1';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import React from 'react';
Amplify.configure(awsExports);


function App({ signOut, user }) {
  return (
    <div>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      </div>
  );
}

export default withAuthenticator(App);