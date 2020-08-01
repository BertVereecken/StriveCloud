import React from 'react';
import { Container, Button, BodyContainer, StyledTitle } from '../common';
import { StackNavigationProps, Navigation } from '../types';

const Settings = ({ navigation, route }: StackNavigationProps<Navigation, 'Settings'>) => {
  return (
    <Container>
      <BodyContainer>
        <StyledTitle>Settings</StyledTitle>
        <Button label="logout" onPress={() => navigation.navigate('Onboarding')} />
      </BodyContainer>
    </Container>
  );
};

export { Settings };
