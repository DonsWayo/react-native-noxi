import type { Theme } from '../Types';

const LigthTheme: Theme = {
  dark: false,
  roundness: 8,
  iconsTheme: 'AntDesign',
  colors: {
    primary: '#0D83FF',
    accent: '#03dac4',
    background: '#FFFFFF',
    surface: 'F7F7F7',
    error: '#B00020',
    text: 'black',
    buttonText: 'white',
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
