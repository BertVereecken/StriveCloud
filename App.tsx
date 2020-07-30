import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Onboarding, LoadAssets, Login, Register, Home, Settings } from './src/components';
import { ThemeProvider } from 'styled-components/native';
import { theme, StyledSafeAreaView } from './src/components/common';
import type { Navigation } from './src/components/types';

const Stack = createStackNavigator<Navigation>();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <LoadAssets>
      <ThemeProvider theme={theme}>
        <StyledSafeAreaView>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={BottomTabs} />
          </Stack.Navigator>
        </StyledSafeAreaView>
      </ThemeProvider>
    </LoadAssets>
  );
};

export default App;
