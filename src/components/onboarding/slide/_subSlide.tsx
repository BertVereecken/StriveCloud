import React from 'react';
import { Button, StyledTitle, StyledText } from '../../common';
import styled from 'styled-components/native';

interface subSlideProps {
  title: string;
  variant?: string;
  navigateToLogin: () => void;
  navigateToRegister: () => void;
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: 'center';
  padding: 0 2rem;
  align-items: center;
`;

const SubSlide = ({
  title,
  navigateToLogin,
  navigateToRegister,
}: subSlideProps) => {
  return (
    <Container>
      <StyledTitle size="1.5rem">{title}</StyledTitle>
      <StyledText margin="0 0 2rem 0">
        Sign in to start playing tournaments
      </StyledText>
      <Button
        label="Have an account already? Sign in"
        onPress={navigateToLogin}
      />
      <Button
        label="Join us, it's free"
        variant="default"
        onPress={navigateToRegister}
      />
    </Container>
  );
};

export { SubSlide };
