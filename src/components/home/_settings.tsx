import React from 'react';
import { Container, Button } from '../common';
import { Text } from 'react-native';
import { StackNavigationProps, Navigation } from '../types';

const Settings = ({ navigation, route }: StackNavigationProps<Navigation, 'Settings'>) => {
  return (
    <Container>
      <Text>Settings</Text>
      <Button label="logout" onPress={() => navigation.navigate('Onboarding')} />
    </Container>
  );
};

export { Settings };
