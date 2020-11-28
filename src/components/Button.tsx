import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

export interface Props {
  text: string;
  loading?: boolean;
  size?: 'small' | 'normal' | 'full';
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  onLayout?: (event: any) => void;
}

const Button = ({
  text,
  loading,
  style,
  onPress,
  onLayout,
  size = 'normal',
}: Props) => (
  <TouchableOpacity
    style={[styles.button, styles[size], style]}
    onPress={onPress}
    onLayout={onLayout}
  >
    {loading ? (
      <ActivityIndicator />
    ) : (
      <Text numberOfLines={1} adjustsFontSizeToFit={true}>
        {text}
      </Text>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 8,
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

export default Button;
