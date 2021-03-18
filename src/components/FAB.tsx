import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Animated,
} from 'react-native';
import { withTheme } from '../core/Theme';
import Icon from 'react-native-dynamic-vector-icons';
import Portal from './Portal/Portal';

export interface IFABProps {
  type?: 'small' | 'large';
  theme: ReactNativeNoxi.Theme;
  icon: string;
  iconColor?: string;
  visible?: boolean;
  style?: StyleProp<ViewStyle>;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  onPress?: () => void;
}

const FAB: React.FC<IFABProps> = ({
  theme,
  type = 'small',
  icon,
  onPress,
  visible = true,
  iconColor = 'white',
  style,
  position = 'bottom-right',
}) => {
  let fabPos: StyleProp<any> = {};
  const { current: visibility } = React.useRef<Animated.Value>(
    new Animated.Value(0)
  );
  const { scale } = theme.animation;

  switch (position) {
    case 'top-left':
      fabPos = { top: 10, left: 10 };
      break;
    case 'top-right':
      fabPos = { top: 10, right: 10 };
      break;
    case 'bottom-left':
      fabPos = { bottom: 10, left: 10 };
      break;
    case 'top-left':
      fabPos = { top: 10, left: 10 };
      break;
    case 'bottom-right':
      fabPos = { bottom: 10, right: 10 };
      break;

    default:
      fabPos = { bottom: 10, right: 10 };
      break;
  }

  React.useEffect(() => {
    if (visible) {
      Animated.timing(visibility, {
        toValue: 1,
        duration: 200 * scale,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(visibility, {
        toValue: 0,
        duration: 100 * scale,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, scale, visibility]);

  return (
    <Portal>
      <TouchableOpacity
        style={[
          styles[type],
          {
            backgroundColor: theme.colors.primary,
            opacity: visibility,
            transform: [
              {
                scale: visibility,
              },
            ],
          },
          fabPos,
          style,
        ]}
      >
        <Icon
          name={icon}
          type={theme.iconsTheme}
          size={30}
          color={iconColor}
          onPress={onPress}
        />
      </TouchableOpacity>
    </Portal>
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
  },
});

export default withTheme(FAB);
