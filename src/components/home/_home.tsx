import React, { useCallback } from 'react';
import { Text } from 'react-native';
import { Container, Button } from '../common';
import { StackNavigationProps, Navigation } from '../types';

const Home = ({ navigation, route }: StackNavigationProps<Navigation, 'Home'>) => {
  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container>
      <Text>fefef</Text>
      <Button onPress={goBack} label="terug" />
    </Container>
  );
};

export { Home };
