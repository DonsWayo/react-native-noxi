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
  loading?: boolean;
  size?: 'small' | 'normal' | 'full';
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  onLayout?: (event: any) => void;
  theme: ReactNativeNoxi.Theme;
}

const Button = ({
  theme,
  children,
  loading,
  style,
  onPress,
  onLayout,
  size = 'normal',
}: ButtonProps) => {
  const buttonStyle = {
    backgroundColor: theme.colors.primary,
  };

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, styles[size], style]}
      onPress={onPress}
      onLayout={onLayout}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.buttonText} />
      ) : (
        <Text numberOfLines={1} style={[{ color: theme.colors.buttonText }]}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
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
