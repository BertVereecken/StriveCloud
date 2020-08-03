import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Slide, SLIDE_HEIGHT, SubSlide } from './slide';
import styled from 'styled-components/native';
import { StackNavigationProps, Navigation } from '../types';

const BORDER_RADIUS = '5rem';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme: { white } }) => white};
`;

const Header = styled.View`
  flex: 1;
  height: ${SLIDE_HEIGHT};
  background-color: ${({ theme: { purple } }) => purple};
  border-bottom-right-radius: ${BORDER_RADIUS};
`;

const Footer = styled.View`
  flex: 0.6;
  border-top-left-radius: ${BORDER_RADIUS};
`;

const FooterContent = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: ${({ theme: { white } }) => white};
  border-top-left-radius: ${BORDER_RADIUS};
`;

const StyledView = styled.View`
  flex: 1;
  background-color: ${({ bgColor }) => bgColor};
  ${StyleSheet.absoluteFillObject};
`;

const Onboarding = ({ navigation }: StackNavigationProps<Navigation, 'Onboarding'>) => {
  const goToLoginComponent = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  const goToRegisterComponent = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);

  return (
    <Container>
      <Header>
        <Slide label="StriveCloud" />
      </Header>

      <Footer>
        <StyledView bgColor="rgba(38, 10, 145, 1)" />
        <FooterContent>
          <SubSlide
            title="Welcome"
            navigateToLogin={goToLoginComponent}
            navigateToRegister={goToRegisterComponent}
          />
        </FooterContent>
      </Footer>
    </Container>
  );
};

export { Onboarding };
