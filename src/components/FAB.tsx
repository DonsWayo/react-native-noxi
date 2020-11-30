import React, { ReactNode } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { withTheme } from '../core/Theme';

export interface IFABProps {
  children: ReactNode;
  type?: 'small' | 'large';
  theme: ReactNativeNoxi.Theme;
}

const FAB: React.FC<IFABProps> = ({ theme, children, type = 'small' }) => {
  return (
    <TouchableOpacity
      style={[styles[type], { backgroundColor: theme.colors.primary }]}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  small: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  large: {
    flex: 1,
    flexDirection: 'row',
    minWidth: 100,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default withTheme(FAB);
