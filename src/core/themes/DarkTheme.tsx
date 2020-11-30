import type { Theme } from '../Types';

const DarkTheme: Theme = {
  dark: false,
  roundness: 8,
  iconsTheme: 'AntDesign',
  colors: {
    primary: '#0D83FF',
    accent: '#03dac4',
    background: 'black',
    surface: 'black',
    error: '#B00020',
    text: 'white',
    buttonText: 'white',
    onBackground: '#000000',
    onSurface: '#000000',
    disabled: 'gray',
    placeholder: 'color(black).alpha(0.54).rgb().string()',
    backdrop: 'color(black).alpha(0.5).rgb().string()',
    notification: 'pinkA400',
  },
  animation: {
    scale: 1.0,
  },
};

export default DarkTheme;
