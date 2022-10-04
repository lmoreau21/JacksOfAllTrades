import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import './pages/login.js'
import './pages/signup.js'

//import Home from './pages'
import Login from './pages/login'
import Signup from './pages/signup'

function App() {
return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
    </Routes>
    </Router>
);
}
  
export default App;

/*
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import {Amplify} from 'aws-amplify'
import config from '../src/aws-exports'
import {AmplifyProvider} from '@aws-amplify/ui-react'
import {Login, studioTheme} from '../src/ui-components'
import '@aws-amplify/ui-react/styles.css'
//import { SignUp } from '@aws-amplify/ui-react/dist/types/components/Authenticator/SignUp';
Amplify.configure(config)
function App({Component, pageProps}) {
  return (
    <AmplifyProvider theme={Login}>
      
      <Component {...pageProps}/>
    </AmplifyProvider>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
//import ReactDOM from 'react-dom';

import './App.css';

import {Amplify} from 'aws-amplify'
import config from './aws-exports'
import {AmplifyProvider} from '@aws-amplify/ui-react'
import {Login, studioTheme} from './ui-components'
import '@aws-amplify/ui-react/styles.css'
//Amplify.configure(aws_exports);

Amplify.configure(config)
function App({Component, pageProps}) {
  return (
    <AmplifyProvider theme={Login}>
            <Component {...pageProps}/>
      </AmplifyProvider>
    );
}

export default App;


import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import {Amplify} from 'aws-amplify'
import config from '../src/aws-exports'
import {AmplifyProvider} from '@aws-amplify/ui-react'
import {studioTheme,Login} from '../src/ui-components'
import '@aws-amplify/ui-react/styles.css'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <AmplifyProvider theme={studioTheme}>
      <Login/>
    </AmplifyProvider>
  );
}

export default App;


import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './App.css';

function App() {
// React States
const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);

// User Login Info
const database = [
  {
    username: "user1",
    password: "pass1"
  },
  {
    username: "user2",
    password: "pass2"
  }
];

const errors = {
  uname: "invalid username",
  pass: "invalid password"
};

const handleSubmit = (event) => {
  //Prevent page reload
  event.preventDefault();

  var { uname, pass } = document.forms[0];

  // Find user login info
  const userData = database.find((user) => user.username === uname.value);

  // Compare user info
  if (userData) {
    if (userData.password !== pass.value) {
      // Invalid password
      setErrorMessages({ name: "pass", message: errors.pass });
    } else {
      setIsSubmitted(true);
    }
  } else {
    // Username not found
    setErrorMessages({ name: "uname", message: errors.uname });
  }
};

// Generate JSX code for error message
const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

// JSX code for login form
const renderForm = (
  <div className="form">
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" required />
        {renderErrorMessage("uname")}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
        {renderErrorMessage("pass")}
      </div>
      <div className="button-container">
        <input type="submit" />
      </div>
    </form>
  </div>
);

return (
  <div className="app">
    <div className="login-form">
      <div className="title">Sign In</div>
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    </div>
  </div>
);
}

export default App;
*/