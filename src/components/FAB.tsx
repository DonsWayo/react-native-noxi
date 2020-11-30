import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { withTheme } from '../core/Theme';
import Icon from 'react-native-dynamic-vector-icons';
import Portal from './Portal/Portal';

export interface IFABProps {
  type?: 'small' | 'large';
  theme: ReactNativeNoxi.Theme;
  icon: string;
  enabled?: boolean;
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
  enabled = true,
  style,
  position = 'bottom-right',
}) => {
  let fabPos: StyleProp<any> = {};

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

  return (
    <Portal>
      <TouchableOpacity
        style={[
          styles[type],
          { backgroundColor: theme.colors.primary },
          fabPos,
          style,
        ]}
      >
        <Icon
          name={icon}
          type={theme.iconsTheme}
          size={30}
          color={enabled ? theme.colors.buttonText : theme.colors.disabled}
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
