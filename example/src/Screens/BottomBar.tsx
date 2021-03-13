import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

import { View } from 'react-native';
import ButtonScreen from './ButtonScreen';
import { TabBar } from 'react-native-noxi';
import AvatarScreen from './AvatarScreen';
import CardScreen from './CardScreen';

export const BottomMenu = () => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <Tab.Navigator
        tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
      >
        <Tab.Screen
          name="search1"
          component={ButtonScreen}
          options={({}) => ({
            tabBarLabel: 'md-map',
            iconFamily: 'Ionicons',
          })}
        />
        <Tab.Screen name="dashboard" component={AvatarScreen} />
        <Tab.Screen name="profile" component={CardScreen} />
      </Tab.Navigator>
    </View>
  );
};
