import type { Theme } from '../Types';

const DarkTheme: Theme = {
  dark: true,
  roundness: 8,
  iconsTheme: 'AntDesign',
  colors: {
    primary: '#0D83FF',
    accent: '#03dac4',
    background: '#121212',
    surface: '#121212',
    error: '#B00020',
    text: 'white',
    buttonText: 'white',
    disabled: 'rgba(255, 255, 255, 0.38)',
    placeholder: 'rgba(255, 255, 255, 0.54)',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    notification: 'pinkA400',
  },
  animation: {
    scale: 1.0,
  },
};

export default DarkTheme;
