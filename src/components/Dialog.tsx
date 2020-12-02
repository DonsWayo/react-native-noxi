import React, { useEffect, useState, ReactNode } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  Platform,
} from 'react-native';
import { SizeBox } from 'react-native-noxi';
import { withTheme } from '../core/Theme';
import Portal from './Portal/Portal';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

interface DialogProps {
  theme: ReactNativeNoxi.Theme;
  show?: boolean;
  title?: string;
  message?: string;
  backgroundColorOverlay?: string;
  header?: ReactNode;
  duration?: string;
  children?: ReactNode;
}

const Dialog: React.FC<DialogProps> = ({
  title = 'Title',
  message = 'Message',
  show = false,
  theme,
  header,
  children,
  backgroundColorOverlay = theme.colors.backdrop,
}: DialogProps) => {
  const [state, setState] = useState({
    positionView: new Animated.Value(SCREEN_HEIGHT),
    opacity: new Animated.Value(0),
    positionPopup: new Animated.Value(SCREEN_HEIGHT),
    popupHeight: 0,
    multipleChildren: false,
  });

  function showDialog() {
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
        toValue: SCREEN_HEIGHT / 3 - state.popupHeight / 2,
        bounciness: 5,
        useNativeDriver: true,
      }),
    ]).start();
  }

  function hide() {
    Animated.sequence([
      Animated.timing(state.positionPopup, {
        toValue: SCREEN_HEIGHT,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(state.positionView, {
        toValue: SCREEN_HEIGHT,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  }

  useEffect(() => {
    if (show) {
      setState({
        ...state,
        multipleChildren: React.Children.count(children) >= 2,
      });
      showDialog();
    } else {
      hide();
    }
  }, [show]);

  return (
    <Portal>
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
            styles.dialogContainer,
            { backgroundColor: theme.colors.surface },
            {
              transform: [{ translateY: state.positionPopup }],
            },
          ]}
        >
          {header ? <View style={styles.header}>{header}</View> : <></>}
          <View style={[styles.content, { marginTop: header ? 0 : '10%' }]}>
            <Text style={[{ color: theme.colors.text }, styles.title]}>
              {title}
            </Text>
            <SizeBox />
            <Text style={[{ color: theme.colors.text }]}>{message}</Text>
            <SizeBox />
            <View
              style={[
                styles.dialogContent,
                {
                  width: state.multipleChildren ? SCREEN_WIDTH / 1.8 : '100%',
                  justifyContent:
                    Platform.OS === 'web' && !state.multipleChildren
                      ? 'center'
                      : 'space-between',
                },
              ]}
            >
              {children}
            </View>
          </View>
        </Animated.View>
      </Animated.View>
    </Portal>
  );
};

export default withTheme(Dialog);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'center',
  },
  dialogContainer: {
    maxWidth: 350,
    minWidth: 200,
    minHeight: 100,
    borderRadius: 30,
    alignItems: 'center',
    overflow: 'hidden',
    position: 'absolute',
  },
  dialogContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '3%',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    marginTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
