import React, { ReactNode } from 'react';
import PortalHost from '../components/Portal/PortalHost';
import { ThemeProvider } from './Theme';
import LightTheme from './themes/LightTheme';

interface PropsProvider {
  children: ReactNode;
  theme?: ReactNativeNoxi.Theme;
}

const defaultProps: PropsProvider = {
  theme: LightTheme,
  children: null,
};

const Provider: React.FC<PropsProvider> = ({
  theme,
  children,
}: PropsProvider) => {
  return (
    <PortalHost>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </PortalHost>
  );
};

Provider.defaultProps = defaultProps;

export default Provider;
