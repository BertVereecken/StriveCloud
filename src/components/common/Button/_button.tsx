import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ButtonProps {
  label: string;
  variant?: string;
  onPress: () => void;
}

const StyledRectButton = styled(RectButton)`
  height: 3.5rem;
  width: 13rem;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  ${({ variant, theme: { orange, purple, buttonBorderRadius } }) => `
    border-radius: ${buttonBorderRadius}
    background-color: ${variant === 'primary' ? orange : purple};
  `};
`;

const ButtonText = styled.Text`
  ${({ variant, theme: { black, white, regular } }) => `
    color: ${variant === 'primary' ? black : white};
    font-family: ${regular};
  `}
  text-align: center;
`;
const Button = ({ label, variant = 'primary', onPress }: ButtonProps) => {
  return (
    <StyledRectButton onPress={onPress} variant={variant}>
      <ButtonText variant={variant}>{label}</ButtonText>
    </StyledRectButton>
  );
};

export { Button };
