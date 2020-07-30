import React from 'react';
import styled from 'styled-components/native';

interface ButtonProps {
  label: string;
  variant?: string;
  onPress: () => void;
  disabled?: boolean;
}

const ButtonWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

const StyledRectButton = styled.TouchableOpacity`
  height: 3.5rem;
  width: 13rem;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  ${({
    variant,
    disabled,
    theme: { orange, purple, buttonBorderRadius, disabledButton },
  }) =>
    !disabled
      ? `
    border-radius: ${buttonBorderRadius}
    background-color: ${variant === 'primary' ? orange : purple};
  `
      : `
    border-radius: ${buttonBorderRadius}
    background-color: ${disabledButton};
  `};
`;

const ButtonText = styled.Text`
  ${({ variant, theme: { black, white, regular } }) => `
    color: ${variant === 'primary' ? black : white};
    font-family: ${regular};
  `}
  text-align: center;
`;

const Button = ({
  label,
  variant = 'primary',
  onPress,
  disabled = false,
}: ButtonProps) => {
  return (
    <ButtonWrapper>
      <StyledRectButton onPress={onPress} variant={variant} disabled={disabled}>
        <ButtonText variant={variant}>{label}</ButtonText>
      </StyledRectButton>
    </ButtonWrapper>
  );
};

export { Button };
