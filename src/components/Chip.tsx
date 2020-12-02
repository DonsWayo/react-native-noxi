import React, { ReactNode } from 'react';
import {
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
  Text,
  View,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import { withTheme } from '../core/Theme';
import Icon from 'react-native-dynamic-vector-icons';

interface AvatarProps {
  theme: ReactNativeNoxi.Theme;
  children: ReactNode;
  itemLeft?: ReactNode;
  icon?: string;
  itemRight?: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  type?: 'round' | 'square';
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ViewStyle>;
  iconSize?: number;
  disabled?: boolean;
}

const Chip = ({
  children,
  type = 'round',
  onPress,
  icon,
  theme,
  itemLeft,
  itemRight,
  textStyle,
  style,
  iconStyle,
  iconSize,
  disabled,
}: AvatarProps) => {
  const chipContentStyle: StyleProp<any> = {
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    padding: 4,
  };

  const defaultTextStyle: StyleProp<any> = {
    color: theme.colors.buttonText,
    letterSpacing: 0.3,
    fontSize: 12,
    margin: 5,
  };

  if (type === 'round') {
    chipContentStyle.borderRadius = 100;
  }

  if (type === 'square') {
    chipContentStyle.borderRadius = 10;
  }

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={[chipContentStyle, style]}>
        {icon ? (
          <Icon
            name={icon}
            type={theme.iconsTheme}
            size={iconSize || 25}
            style={iconStyle}
            color={theme.colors.buttonText}
          />
        ) : (
          <>{itemLeft}</>
        )}
        <Text style={[defaultTextStyle, textStyle]}>{children}</Text>
        {itemRight}
      </View>
    </TouchableOpacity>
  );
};

export default withTheme(Chip);
