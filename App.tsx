/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* Generated with the TypeScript template
* https://github.com/react-native-community/react-native-template-typescript
*
* @format
*/

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import Game from './Game';
import Welcome from './Welcome';

export type RootStackParamList = {
  Welcome: undefined;
  Game: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Game" component={Game} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};
  
export default App;
  