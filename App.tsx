import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding, LoadAssets, Login, Register } from './src/components';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/components/common';
import type { Navigation } from './src/components/types';

const Stack = createStackNavigator<Navigation>();

const App = () => {
  return (
    <LoadAssets>
      <ThemeProvider theme={theme}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </ThemeProvider>
    </LoadAssets>
  );
};

export default App;
