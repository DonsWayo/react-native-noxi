import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

import { View } from 'react-native';
import ButtonScreen from './ButtonScreen';
import { TabBar } from 'react-native-noxi';

export const BottomMenu = () => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <Tab.Navigator
        tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
      >
        <Tab.Screen name="search1" component={ButtonScreen} />
        <Tab.Screen name="dashboard" component={ButtonScreen} />
        <Tab.Screen name="profile" component={ButtonScreen} />
      </Tab.Navigator>
    </View>
  );
};
