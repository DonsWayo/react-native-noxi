import React from 'react';
import { LigthTheme } from 'react-native-noxi';

const ThemeContext = React.createContext({
  theme: LigthTheme,
  setTheme: (args: any) => {},
});

export default ThemeContext;
