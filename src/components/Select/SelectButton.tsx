import React, { useState } from 'react';
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
import Select from './Select';

interface SelectButtonProps {
  label: string;
  children?: React.ReactNode;
  loading?: boolean;
  size?: 'small' | 'normal' | 'full';
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  theme: ReactNativeNoxi.Theme;
}

const SelectButton = ({
  theme,
  children,
  label,
  loading,
  style,
  onPress,
  size = 'small',
}: SelectButtonProps) => {
  const [state, setState] = useState({
    showSelect: false,
    xPos: 0,
    yPos: 0,
  });

  const buttonStyle = {
    backgroundColor: theme.colors.primary,
  };

  const onClose = () => {
    setState({ ...state, showSelect: false });
  };
  const setSelectPos = (evt) => {
    if (evt.x <= 10) {
      setState({ ...state, xPos: -evt.width, yPos: evt.y + evt.height * 4 });
    } else {
      setState({ ...state, xPos: evt.x / 4, yPos: evt.y + evt.height * 4 });
    }
  };

  const showSelect = () => {
    setState({ ...state, showSelect: true });
  };

  return (
    <>
      <TouchableOpacity
        style={[styles.button, buttonStyle, styles[size], style]}
        onPress={showSelect}
        onLayout={({ nativeEvent }) => {
          console.log('opa');
          console.log(nativeEvent.layout);
          setSelectPos(nativeEvent.layout);
        }}
      >
        {loading ? (
          <ActivityIndicator color={theme.colors.buttonText} />
        ) : (
          <Text numberOfLines={1} style={[{ color: theme.colors.buttonText }]}>
            {label}
          </Text>
        )}
      </TouchableOpacity>

      <Select
        show={state.showSelect}
        xPos={state.xPos}
        yPos={state.yPos}
        onClose={onClose}
      >
        {children}
      </Select>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  SelectButton: {
    borderRadius: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  small: {
    height: 40,
    width: 80,
  },
  normal: {
    height: 40,
    width: 130,
  },
  full: {
    height: 40,
    width: '100%',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withTheme(SelectButton);
