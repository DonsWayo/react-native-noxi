import React, { ReactNode } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import { withTheme } from '../../core/Theme';

interface SelectItemProps {
  label: string;
  children?: ReactNode;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  onLayout?: (event: any) => void;
  theme: any;
}

const SelectItem = ({
  theme,
  children,
  label,
  loading,
  style,
  onPress,
}: SelectItemProps) => {
  return (
    <TouchableOpacity style={[styles.selectItemBasic, style]} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={theme.colors.buttonText} />
      ) : (
        <Text
          numberOfLines={1}
          style={[styles.textItem, { color: theme.colors.primary }]}
        >
          {label}
          {children}
        </Text>
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
  textItem: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default withTheme(SelectItem);
