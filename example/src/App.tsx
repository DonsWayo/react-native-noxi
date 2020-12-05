import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import ButtonScreen from './Screens/ButtonScreen';
import { BottomMenu } from './Screens/BottomBar';
import {
  LigthTheme,
  Provider as ReactNativeNoxiProvider,
} from 'react-native-noxi';
import TextInputScreen from './Screens/TextInputScreen';
import DialogScreen from './Screens/DialogScreen';
import AvatarScreen from './Screens/AvatarScreen';
import FABScreen from './Screens/FabScreen';
import TextsScreen from './Screens/TextScreen';
import { useState } from 'react';
import ThemeContext from './ThemeContext';
import SelectScreen from './Screens/SelectScreen';
import ChipScreen from './Screens/ChipScreen';
import CardScreen from './Screens/CardScreen';
import ListScreen from './Screens/LayoutScreen';

const Stack = createStackNavigator();

export default function App() {
  const [theme, setTheme] = useState(LigthTheme);
  const value = { theme, setTheme };
  return (
    //@ts-ignore
    <ThemeContext.Provider value={value}>
      <ReactNativeNoxiProvider theme={value.theme}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Button" component={ButtonScreen} />
            <Stack.Screen name="BottomMenu" component={BottomMenu} />
            <Stack.Screen name="TextInput" component={TextInputScreen} />
            <Stack.Screen name="List" component={ListScreen} />
            <Stack.Screen name="Dialog" component={DialogScreen} />
            <Stack.Screen name="Avatar" component={AvatarScreen} />
            <Stack.Screen name="FAB" component={FABScreen} />
            <Stack.Screen name="Text" component={TextsScreen} />
            <Stack.Screen name="Select" component={SelectScreen} />
            <Stack.Screen name="Chip" component={ChipScreen} />
            <Stack.Screen name="Card" component={CardScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ReactNativeNoxiProvider>
    </ThemeContext.Provider>
  );
}
