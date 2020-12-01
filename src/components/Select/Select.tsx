/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, ReactNode } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { withTheme } from '../../core/Theme';
import Portal from '../Portal/Portal';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

interface SelectProps {
  xPos: number;
  yPos: number;
  onClose: any;
  backgroundColorOverlay?: string;
  duration?: string;
  show?: boolean;
  children?: ReactNode;
  theme: ReactNativeNoxi.Theme;
}

const Select = ({
  show = false,
  theme,
  xPos = 0,
  yPos = 0,
  children,
  onClose,
  backgroundColorOverlay = 'rgba(0, 0, 0, 0.1)',
}: SelectProps) => {
  const [state, setState] = useState({
    positionView: new Animated.Value(yPos),
    opacity: new Animated.Value(0),
    positionPopup: new Animated.Value(xPos - yPos),
    positionX: xPos,
    positionY: yPos,
    popupHeight: 0,
    multipleChildren: false,
  });

  function showSelect() {
    Animated.sequence([
      Animated.timing(state.positionView, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(state.opacity, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.spring(state.positionPopup, {
        toValue: xPos + yPos,
        bounciness: 5,
        useNativeDriver: true,
      }),
    ]).start();
  }

  function hide() {
    Animated.sequence([
      Animated.timing(state.positionPopup, {
        toValue: SCREEN_HEIGHT,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(state.positionView, {
        toValue: SCREEN_HEIGHT,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  }

  useEffect(() => {
    if (show) {
      showSelect();
    } else {
      hide();
    }
  }, [show]);

  useEffect(() => {
    setState({ ...state, positionX: xPos, positionY: yPos });
  }, [xPos, yPos]);

  return (
    <Portal>
      <TouchableWithoutFeedback onPress={onClose}>
        <Animated.View
          style={[
            styles.container,
            {
              backgroundColor: backgroundColorOverlay,
              opacity: state.opacity,
              transform: [{ translateY: state.positionView }],
            },
          ]}
        >
          <Animated.View
            style={[
              styles.SelectContainer,
              { backgroundColor: theme?.colors.surface },
              {
                transform: [
                  { translateY: state.positionY },
                  { translateX: state.positionX },
                ],
              },
            ]}
          >
            <View style={styles.content}>
              <View style={[styles.SelectContent]}>{children}</View>
            </View>
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Portal>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 99999,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'center',
    top: 0,
    left: 0,
  },
  SelectContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    position: 'absolute',
  },
  SelectContent: {
    flex: 1,
    padding: 10,
  },
  content: {
    alignItems: 'center',
    flexDirection: 'column',
  },
});

export default withTheme(Select);
