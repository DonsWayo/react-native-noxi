import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import ButtonScreen from './Screens/ButtonScreen';
import { BottomMenu } from './Screens/BottomBar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Button" component={ButtonScreen} />
        <Stack.Screen name="BottomMenu" component={BottomMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
