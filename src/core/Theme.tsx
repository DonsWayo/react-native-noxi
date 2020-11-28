import { createTheming } from '@callstack/react-theme-provider';
import LigthTheme from './themes/LightTheme';

export const {
  ThemeProvider,
  withTheme,
  useTheme,
} = createTheming<ReactNativeNoxi.Theme>(LigthTheme as ReactNativeNoxi.Theme);
