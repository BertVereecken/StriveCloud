import React, { useCallback } from 'react';
import styled from 'styled-components/native';
interface TextFieldProps {
  name: string;
  autoCompleteType: string;
  placeholder: string;
  textContentType: string;
  Icon: any;
  handleUserInput: (input: string, name: string) => void;
}

const StyledTextField = styled.TextInput`
  width: 10rem;
  height: 3rem;
  padding: 0.5rem 1rem;
  width: 100%;
`;

const Wrapper = styled.View`
  margin: 0 0 1.5rem 0;
  padding: 0 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 0.3rem;
`;

const TextField = React.memo(
  ({
    autoCompleteType,
    placeholder,
    textContentType,
    Icon,
    handleUserInput,
    name,
  }: TextFieldProps) => {
    const handleChange = useCallback(
      (e) => {
        handleUserInput(e, name);
      },
      [handleUserInput, name],
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
  },
);

export { TextField };
