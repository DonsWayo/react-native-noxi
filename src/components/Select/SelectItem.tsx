import React, { ReactNode } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
  View,
} from 'react-native';
import { withTheme } from '../../core/Theme';
import Icon from 'react-native-dynamic-vector-icons';

interface SelectItemProps {
  label: string;
  icon?: string;
  children?: ReactNode;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  onLayout?: (event: any) => void;
  iconStyle?: StyleProp<ViewStyle>;
  theme: any;
}

const SelectItem = ({
  theme,
  label,
  loading,
  style,
  onPress,
  iconStyle,
  icon,
}: SelectItemProps) => {
  return (
    <TouchableOpacity style={[styles.selectItemBasic, style]} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={theme.colors.buttonText} />
      ) : (
        <View style={[styles.selectView]}>
          {icon ? (
            <Icon
              name={icon}
              style={iconStyle}
              type={theme.iconsTheme}
              size={30}
              color={theme.colors.primary}
            />
          ) : (
            <></>
          )}
          <Text
            numberOfLines={1}
            style={[
              styles.textItem,
              { color: theme.colors.primary, marginLeft: icon ? 3 : 0 },
            ]}
          >
            {label}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  selectItemBasic: {
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textItem: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default withTheme(SelectItem);
