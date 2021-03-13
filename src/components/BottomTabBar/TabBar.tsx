import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  StyleSheet,
  Platform,
} from 'react-native';
import TabBarItem from './TabBarItem';
import { withTheme } from '../../core/Theme';
import { isIphoneX } from 'react-native-iphone-x-helper';

const TabBar = ({ theme, state, descriptors, navigation }) => {
  const [translateValue] = useState(new Animated.Value(0));
  const totalWidth = Dimensions.get('window').width;
  const tabWidth = totalWidth / state.routes.length;
  const tabBarStyleHeigth = {
    height: Platform.OS === 'ios' ? 50 : 45,
  };

  if (isIphoneX()) {
    tabBarStyleHeigth.height = 70;
  }

  const animateLine = (index: number) => {
    Animated.spring(translateValue, {
      toValue: index * tabWidth,
      velocity: 10,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animateLine(state.index);
  }, [state.index]);

  return (
    <View
      style={[
        style.tabContainer,
        tabBarStyleHeigth,
        { width: totalWidth, backgroundColor: theme.colors.surface },
      ]}
    >
      <View style={{ flexDirection: 'row' }}>
        <Animated.View
          style={[
            style.slider,
            { backgroundColor: theme.colors.primary },
            {
              transform: [{ translateX: translateValue }],
              width: tabWidth - 60,
            },
          ]}
        />

        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const iconFamily = options.iconFamily;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }

            animateLine(index);
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
              key={index}
            >
              <TabBarItem
                iconName={label.toString()}
                isCurrent={isFocused}
                iconFamily={iconFamily}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default withTheme(TabBar);

const style = StyleSheet.create({
  tabContainer: {
    shadowOffset: {
      width: 0,
      height: -1,
    },
    borderTopColor: 'gray',
    shadowOpacity: 0.1,
    shadowRadius: 4.0,
    elevation: 10,
    position: 'absolute',
    bottom: 0,
  },
  slider: {
    height: 2.5,
    position: 'absolute',
    top: 0,
    left: 30,
    borderRadius: 10,
  },
});
