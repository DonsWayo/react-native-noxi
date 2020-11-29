import React, { useEffect } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';

export type EntryDirection = 'up' | 'down';

interface EntryProps {
  visible?: boolean;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  direction?: EntryDirection;
}

export const Entry = (props: EntryProps) => {
  const visibility: Animated.Value = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(visibility, {
      toValue: props.visible ? 1 : 0,
      duration: 50,
      useNativeDriver: false,
    }).start();
  }, [props.visible]);

  const { style, children, direction = 'down', visible, ...rest } = props;

  const directions = {
    up: [5, 0],
    down: [-5, 0],
  };

  const test = visibility.interpolate({
    inputRange: [0, 1],
    outputRange: directions[direction] || [0, 0],
  });

  const containerStyle = {
    opacity: visibility.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
    transform: [
      {
        translateY: test,
      },
    ],
  };

  const combinedStyle = [containerStyle, style];
  return (
    <Animated.View style={visible ? combinedStyle : containerStyle} {...rest}>
      {visible ? children : null}
    </Animated.View>
  );
};
