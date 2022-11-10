import React from 'react';
//import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter}
    from 'react-router-dom';
import './pages/home.js'
import './aws-exports'


import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator, Button, Heading, AmplifyProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './aws-exports';
import TopBarFinal from './ui-components/TopBarFinal.jsx';

//importing pages of the website
import Home from './pages/home'
import SkillDisplay from './pages/skillprofile';
import SkillList from './pages/skilllist'
import NoPage from './pages/nopage'
import Settings from './pages/settings.js';
import About from './pages/about.js'
import SkillSuggest from './pages/skillsuggest.js';

Amplify.configure(awsconfig);

//main routing function
function App({}) {
//creates all the routes and calls all of the functions
return (
  <BrowserRouter>
    <div>     
        
      <TopBarFinal/>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path = '/about' element={<About/>}/>
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
  
export default (App);