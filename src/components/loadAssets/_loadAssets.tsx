import React, { ReactElement, useEffect, useState, useCallback } from 'react';
import { NavigationContainer, InitialState } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import { AsyncStorage } from 'react-native';
import Constants from 'expo-constants';

const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${Constants.manifest.sdkVersion}`;

interface LoadAssetsProps {
  children: ReactElement | ReactElement[];
}
const LoadAssets = ({ children }: LoadAssetsProps) => {
  const [isNavigationReady, setIsNavigationReady] = useState(!__DEV__);
  const [initialState, setInitialState] = useState<InitialState | undefined>();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(NAVIGATION_STATE_KEY);

        const state = savedStateString ? JSON.parse(savedStateString) : undefined;

        setInitialState(state);
      } finally {
        setIsNavigationReady(true);
      }
    };

    if (!isNavigationReady) restoreState();
  }, [isNavigationReady]);

  const onStateChange = useCallback(
    (state) => AsyncStorage.setItem(NAVIGATION_STATE_KEY, JSON.stringify(state)),
    [],
  );

  const [fontsLoaded] = useFonts({
    'SFPro-Bold': require('../../../assets/fonts/SF-Pro-Text-Bold.otf'),
    'SFPro-Regular': require('../../../assets/fonts/SF-Pro-Text-Regular.otf'),
    'SFPro-Semibold': require('../../../assets/fonts/SF-Pro-Text-Semibold.otf'),
  });

  if (!fontsLoaded) return <AppLoading />;

  return <NavigationContainer {...{ onStateChange, initialState }}>{children}</NavigationContainer>;
};

export { LoadAssets };
