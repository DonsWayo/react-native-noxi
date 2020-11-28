import type { Theme } from '../Types';

const LigthTheme: Theme = {
  dark: false,
  roundness: 8,
  colors: {
    primary: '#6200ee',
    accent: '#03dac4',
    background: '#f6f6f6',
    surface: 'white',
    error: '#B00020',
    text: 'black',
    onBackground: '#000000',
    onSurface: '#000000',
    disabled: 'color(black).alpha(0.26).rgb().string()',
    placeholder: 'color(black).alpha(0.54).rgb().string()',
    backdrop: 'color(black).alpha(0.5).rgb().string()',
    notification: 'pinkA400',
  },
  animation: {
    scale: 1.0,
  },
};

export default LigthTheme;
