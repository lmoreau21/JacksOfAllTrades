import { useEffect, useState } from 'react';
import { singletonHook } from 'react-singleton-hook';

const initDarkMode = 'light';
let globalSetMode = () => { throw new Error('you must useDarkMode before setting its state'); };

//this singleton function updates all components to dark mode
export const useDarkMode = singletonHook(initDarkMode, () => {
  const [mode, setMode] = useState(localStorage.getItem('mode'),'light');
  useEffect(()=>{
    localStorage.setItem('mode', mode);
    document.body.className = mode;
  },[mode]);
  globalSetMode = setMode;
  return mode;
  
});

export const setDarkMode = mode => globalSetMode(mode);
