import { useState } from 'react';
import { singletonHook } from 'react-singleton-hook';

const initDarkMode = 'light';
let currentMode = initDarkMode;
let globalSetMode = () => { throw new Error('you must useDarkMode before setting its state'); };


export const useDarkMode = singletonHook(initDarkMode, () => {
  const [mode, setMode] = useState(initDarkMode);
  console.log(mode);
  globalSetMode = setMode;
  currentMode = mode;
  return mode;
});

export const setDarkMode = mode => globalSetMode(mode);
