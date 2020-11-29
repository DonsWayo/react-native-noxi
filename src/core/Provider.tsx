import React, { ReactNode } from 'react';
import { ThemeProvider } from './Theme';
import LightTheme from './themes/LightTheme';

interface PropsProvider {
  children: ReactNode;
  theme?: any;
}

const defaultProps: PropsProvider = {
  theme: LightTheme,
  children: null,
};

const Provider: React.FC<PropsProvider> = (props: PropsProvider) => {
  return <ThemeProvider>{props.children}</ThemeProvider>;
};

Provider.defaultProps = defaultProps;

export default Provider;
