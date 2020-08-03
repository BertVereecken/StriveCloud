import React from 'react';
import styled from 'styled-components/native';

interface ButtonProps {
  label: string;
  variant?: string;
  onPress: () => void;
  disabled?: boolean;
  width?: string;
  margin?: string;
}

const ButtonWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.TouchableOpacity`
  height: 3.5rem;
  width: ${({ width }) => width || '100%'};
  justify-content: center;
  align-items: center;
  margin: ${({ margin }) => margin || '0 0.5rem 1.5rem 0.5rem'};
  ${({ variant, disabled, theme: { orange, purple, buttonBorderRadius, disabledButton } }) =>
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

const Button = React.memo(
  ({ label, variant = 'primary', onPress, disabled = false, width, margin }: ButtonProps) => {
    return (
      <ButtonWrapper>
        <StyledButton
          onPress={onPress}
          variant={variant}
          disabled={disabled}
          width={width}
          margin={margin}
        >
          <ButtonText variant={variant}>{label}</ButtonText>
        </StyledButton>
      </ButtonWrapper>
    );
  },
);

export { Button };
