import React, { ReactNode } from 'react';
import { StyleSheet, Text as Txt, StyleProp, TextStyle } from 'react-native';
import { withTheme } from '../core/Theme';

export interface ITextProps {
  children?: ReactNode;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  theme: ReactNativeNoxi.Theme;
  style?: StyleProp<TextStyle>;
}

const Text: React.FC<ITextProps> = ({
  theme,
  children,
  type = 'h5',
  style,
}) => {
  return (
    <Txt style={[styles[type], { color: theme.colors.text }, style]}>
      {children}
    </Txt>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 31,
  },
  h2: {
    fontSize: 24,
  },
  h3: {
    fontSize: 20.8,
  },
  h4: {
    fontSize: 16,
  },
  h5: {
    fontSize: 12.8,
  },
  h6: {
    fontSize: 11.2,
  },
});

export default withTheme(Text);
