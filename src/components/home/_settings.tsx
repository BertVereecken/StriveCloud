import React, { useCallback } from 'react';
import { Container, Button, BodyContainer, StyledTitle } from '../common';
import { StackNavigationProps, Navigation } from '../types';

const Settings = ({ navigation }: StackNavigationProps<Navigation, 'Settings'>) => {
  const goToOnboarding = useCallback(() => {
    navigation.navigate('Onboarding');
  }, [navigation]);

  return (
    <Container>
      <BodyContainer>
        <StyledTitle>Settings</StyledTitle>
        <Button label="logout" onPress={goToOnboarding} />
      </BodyContainer>
    </Container>
  );
};

export { Settings };
