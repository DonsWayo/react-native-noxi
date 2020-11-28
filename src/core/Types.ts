export type Theme = {
  dark: boolean;
  roundness: number;
  colors: {
    primary: string;
    background: string;
    surface: string;
    accent: string;
    error: string;
    text: string;
    onSurface: string;
    onBackground: string;
    disabled: string;
    placeholder: string;
    backdrop: string;
    notification: string;
  };
  animation: {
    scale: number;
  };
};
declare global {
  namespace ReactNativeNoxi {
    interface ThemeFont {
      fontFamily: string;
      fontWeight?:
        | 'normal'
        | 'bold'
        | '100'
        | '200'
        | '300'
        | '400'
        | '500'
        | '600'
        | '700'
        | '800'
        | '900';
    }
    interface ThemeFonts {
      regular: ThemeFont;
      medium: ThemeFont;
      light: ThemeFont;
      thin: ThemeFont;
    }
    interface ThemeColors {
      primary: string;
      background: string;
      surface: string;
      accent: string;
      error: string;
      text: string;
      onSurface: string;
      onBackground: string;
      disabled: string;
      placeholder: string;
      backdrop: string;
      notification: string;
    }

    interface ThemeAnimation {
      scale: number;
    }

    interface Theme {
      dark: boolean;
      roundness: number;
      colors: ThemeColors;
      fonts: ThemeFonts;
      animation: ThemeAnimation;
    }
  }
}
