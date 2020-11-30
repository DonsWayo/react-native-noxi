import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
  Text,
  View,
  TextStyle,
  ImageSourcePropType,
} from 'react-native';
import { withTheme } from '../core/Theme';
import initials from 'initials';

interface AvatarProps {
  theme: ReactNativeNoxi.Theme;
  src?: ImageSourcePropType;
  text?: any;
  color?: string;
  textColor?: string;
  size?: number;
  onPress?: (event: GestureResponderEvent) => void;
  type?: 'round' | 'square';
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
}

const Avatar = ({
  src,
  text,
  size = 60,
  type = 'round',
  styleText,
  onPress,
  color,
  theme,
  textColor,
  style,
}: AvatarProps) => {
  const avatarStlye: StyleProp<any> = {
    width: size,
    height: size,
    backgroundColor: theme.colors.primary,
  };

  const textStyle: StyleProp<any> = {
    fontSize: size / 2,
    color: theme.colors.buttonText,
  };

  if (type === 'round') {
    avatarStlye.borderRadius = size / 2;
  }

  if (type === 'square') {
    avatarStlye.borderRadius = size / 8;
  }

  if (color) {
    avatarStlye.backgroundColor = color;
  }

  if (textColor) {
    textStyle.color = textColor;
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, avatarStlye, style]}>
        {src ? (
          <Image source={src} style={avatarStlye} />
        ) : (
          <Text adjustsFontSizeToFit={true} style={[textStyle, styleText]}>
            {initials(text)}
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withTheme(Avatar);
