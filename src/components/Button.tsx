import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import { withTheme } from '../core/Theme';

interface ButtonProps {
  children: React.ReactNode;
  theme: ReactNativeNoxi.Theme;
  loading?: boolean;
  size?: 'small' | 'normal' | 'full';
  type?: 'round' | 'square';
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  onLayout?: (event: any) => void;
  outline?: boolean;
}

const Button = ({
  theme,
  children,
  loading,
  style,
  onPress,
  onLayout,
  size = 'normal',
  type,
  outline,
}: ButtonProps) => {
  const buttonStyle = {
    backgroundColor: outline ? 'transparent' : theme.colors.primary,
    borderRadius: 50,
    borderWidth: outline ? 1 : 0,
    borderColor: outline ? theme.colors.primary : 'transparent',
  };

  if (type === 'round') {
    buttonStyle.borderRadius = 50;
  }

  if (type === 'square') {
    buttonStyle.borderRadius = 10;
  }

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, styles[size], style]}
      onPress={onPress}
      onLayout={onLayout}
    >
      {loading ? (
        <ActivityIndicator
          color={outline ? theme.colors.primary : theme.colors.buttonText}
        />
      ) : (
        <Text
          numberOfLines={1}
          style={[
            { color: outline ? theme.colors.primary : theme.colors.buttonText },
          ]}
        >
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 4,
  },
  small: {
    height: 40,
    width: 80,
  },
  normal: {
    height: 40,
    width: 130,
  },
  full: {
    height: 40,
    width: '100%',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withTheme(Button);
