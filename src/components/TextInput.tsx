import React, { ReactNode } from 'react';
import {
  StyleSheet,
  TextInput as TI,
  View,
  StyleProp,
  TextStyle,
} from 'react-native';
import { withTheme } from '../core/Theme';
import Icon from 'react-native-dynamic-vector-icons';

interface TextInputProps {
  theme: ReactNativeNoxi.Theme;
  iconLeftName?: ReactNode;
  iconRightName?: ReactNode;
  onChange?: (args: any) => void;
  onBlur?: (args: any) => void;
  onPressRigthIcon?: () => void;
  onPressLeftIcon?: () => void;
  placeholder?: string | undefined;
  value?: string;
  secureTextEntry?: boolean;
  editable?: boolean;
  style?: StyleProp<TextStyle>;
}

const TextInput = ({
  theme,
  onChange,
  onBlur,
  placeholder,
  value,
  secureTextEntry,
  onPressRigthIcon,
  onPressLeftIcon,
  iconLeftName,
  iconRightName,
  editable = true,
}: TextInputProps) => {
  return (
    <View
      style={[
        styles.sectionStyle,
        {
          backgroundColor: theme.colors.surface,
          borderWidth: 0.5,
          borderColor: editable ? theme.colors.primary : theme.colors.disabled,
        },
      ]}
    >
      {iconLeftName ? (
        <Icon
          name={iconLeftName}
          style={styles.iconStyle}
          type={theme.iconsTheme}
          size={30}
          color={editable ? theme.colors.primary : theme.colors.disabled}
          onPress={onPressLeftIcon}
        />
      ) : (
        <></>
      )}
      <TI
        onChange={onChange}
        onBlur={onBlur}
        editable={editable}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        selectionColor={theme.colors.primary}
        placeholderTextColor={
          editable ? theme.colors.primary : theme.colors.disabled
        }
        style={[
          {
            flex: 1,
            marginLeft: 5,
            marginRight: 5,
            color: theme.colors.text,
          },
        ]}
        value={value}
      />
      {iconRightName ? (
        <Icon
          name={iconRightName}
          type={theme.iconsTheme}
          style={styles.iconStyle}
          size={30}
          color={editable ? theme.colors.primary : theme.colors.disabled}
          onPress={onPressRigthIcon}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

export default withTheme(TextInput);

const styles = StyleSheet.create({
  iconStyle: {
    padding: '1%',
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
