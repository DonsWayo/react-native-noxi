import React from 'react';
import {
  View,
  StyleSheet,
  TextStyle,
  ViewStyle,
  StyleProp,
} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import { Text } from 'react-native-noxi';
import { withTheme } from '../core/Theme';

interface NotificationProps {
  theme?: ReactNativeNoxi.Theme;
  type?: 'error' | 'success' | 'warning';
  icon?: string;
  closeIcon?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  styleContent?: StyleProp<ViewStyle>;
  onPressClose?: () => void;
}

const Notification = ({
  theme,
  type = 'error',
  icon = 'exclamationcircleo',
  closeIcon = 'close',
  style,
  styleContent,
  textStyle,
  onPressClose,
}: NotificationProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: theme?.colors.text,
          padding: theme?.padding,
          backgroundColor: theme?.colors.surface,
          shadowColor: theme?.colors[type],
        },
        style,
      ]}
    >
      <Icon
        name={icon}
        type={theme?.iconsTheme}
        size={30}
        color={theme?.colors[type]}
      />
      <View style={[styles.content, styleContent]}>
        <Text
          type="h4"
          style={[styles.textStyle, { color: theme?.colors.text }, textStyle]}
        >
          lasdfisdf sdfiubsdfisud
        </Text>
      </View>
      <Icon
        name={closeIcon}
        type={theme?.iconsTheme}
        size={30}
        color={theme?.colors.text}
        onPress={onPressClose}
      />
    </View>
  );
};

export default withTheme(Notification);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 0.1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 8,
  },
  content: { width: '80%', marginLeft: 10, marginRight: 10 },
  textStyle: { alignItems: 'center', justifyContent: 'center' },
});
