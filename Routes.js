import * as React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./src/Home";
import Eu from "./src/Eu";

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Eu" component={Eu} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}