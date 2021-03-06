import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle, Animated } from 'react-native';
import { withTheme } from '../../core/Theme';

export interface FadeInProps {
  theme: ReactNativeNoxi.Theme;
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  animate?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({
  style,
  theme,
  children,
  animate = true,
}) => {
  const { current: visibility } = React.useRef<Animated.Value>(
    new Animated.Value(0)
  );
  const { scale } = theme.animation;

  React.useEffect(() => {
    Animated.timing(visibility, {
      toValue: 1,
      duration: animate ? 300 * scale : 0,
      useNativeDriver: true,
    }).start();
  }, [scale, visibility]);

  const animateStyle = {
    opacity: visibility,
  };

  return (
    <Animated.View style={[animateStyle, style]}>{children}</Animated.View>
  );
};

export default withTheme(FadeIn);
