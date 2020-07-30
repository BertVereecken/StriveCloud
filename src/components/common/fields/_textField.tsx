import React, { useCallback } from 'react';
import styled from 'styled-components/native';

interface TextFieldProps {
  name: string;
  autoCompleteType: string;
  placeholder: string;
  textContentType: string;
  Icon: any;
  validateUserInput: (input: string, name: string) => void;
}

const StyledTextField = styled.TextInput`
  width: 10rem;
  height: 3rem;
  padding: 0.5rem 1rem;
  width: 100%;
`;

const Wrapper = styled.View`
  margin: 0 3rem 1.5rem 3rem;
  padding: 0 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 0.3rem;
`;

const TextField = ({
  autoCompleteType,
  placeholder,
  textContentType,
  Icon,
  validateUserInput,
  name,
}: TextFieldProps) => {
  const handleChange = useCallback(
    (e) => {
      console.log(e, name);
      validateUserInput(e, name);
    },
    [validateUserInput],
  );
  return (
    <Wrapper>
      {Icon && <Icon />}
      <StyledTextField
        textContentType={textContentType}
        autoCapitalize="words"
        autoCompleteType={autoCompleteType}
        keyboardAppearance="dark"
        onChangeText={handleChange}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
      />
    </Wrapper>
  );
};

export { TextField };
