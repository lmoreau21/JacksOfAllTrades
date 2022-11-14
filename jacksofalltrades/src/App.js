import React, { Component, useEffect, useState } from 'react';
//import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter}
    from 'react-router-dom';
import './pages/home.js'
import './aws-exports'


import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator, Button, Heading, AmplifyProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './aws-exports';


//importing pages of the website
import Home from './pages/home'
import SkillDisplay from './pages/skillprofile';
import SkillList from './pages/skilllist'
import NoPage from './pages/nopage'
import Settings from './pages/settings.js';
import About from './pages/about.js'
import SkillSuggest from './pages/skillsuggest.js';



import { useDarkMode} from "./pages/darkMode.js";
import './ui-components/darkMode.css';
import TopBarFinal from './ui-components/TopBarFinal.jsx';
import AboutUs from './pages/about.js';


Amplify.configure(awsconfig);

//main routing function
function App () {
//creates all the routes and calls all of the functions

//call value from dark mode
const mode = useDarkMode();

return (
  <BrowserRouter>
    
    <div className={`App ${mode}`}>     
      <TopBar/>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path = '/about' element={<AboutPage/>}/>
          <Route path='/*' element={<NoPage/>}/>
          <Route exact path='/skilllist' element={<SkillList/>} />
          <Route path = '/skillprofile/:skillid' element={<SkillDisplay/>} />
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/suggest' element={<SkillSuggest/>}/>
      </Routes>
     
    </div>
  </BrowserRouter>
);
}
export const TopBar = () =>{
  const mode = useDarkMode();
  return <div className={`App ${mode}`}><TopBarFinal/></div>;
}

export const AboutPage = () =>{
  const mode = useDarkMode();
  return <body className={`App ${mode}`}><AboutUs/></body>;
}

export default (App);