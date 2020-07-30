import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';
import { StyleSheet, View } from 'react-native';
import { Button, TextField, Checkbox } from '../common';
import { Container, StyledTitle, StyledText } from '../common/styledComponents';
import { StackNavigationProps, Navigation } from '../types';
import { MailIcon, PasswordIcon, CheckboxIcon } from '../../../assets/svg';

const StyledView = styled.View`
  flex: 1;
  background-color: ${({ bgColor }) => bgColor};
  ${StyleSheet.absoluteFillObject};
`;

const HeaderPart = styled.View`
  flex: 0.2;
  background-color: ${({ theme: { purple } }) => purple};
  border-bottom-right-radius: 5rem;
  /* TODO: change the 5rem to a constant */
`;

const MiddlePart = styled.View`
  flex: 1;
  background-color: ${({ theme: { purple } }) => purple};
`;

const BottomPart = styled.View`
  flex: 0.2;
  background-color: ${({ theme: { purple } }) => purple};
  border-top-right-radius: 5rem;
  align-items: center;
  justify-content: center;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 3rem;
`;

interface IUserInputData {
  email: string;
  password: string;
}
const Register = ({
  navigation,
}: StackNavigationProps<Navigation, 'Register'>) => {
  const [userInput, setUserInput] = useState<IUserInputData>({
    email: '',
    password: '',
  });

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const validateUserInput = useCallback(
    (input: string, name: string) => {
      console.log(input, name);
      setUserInput({
        ...userInput,
        [name]: input,
      });
    },
    [setUserInput, userInput],
  );
  return (
    <Container bgColor="white">
      <HeaderPart />
      <MiddlePart>
        <StyledView
          bgColor="white"
          style={{
            borderTopLeftRadius: '7rem',
            borderBottomLeftRadius: '7rem',
          }}
        />
        <View>
          <StyledTitle size="1.5rem">Create account</StyledTitle>
          <StyledText margin="0 0 2rem 0">
            Let us know your name and password to create an account.
          </StyledText>
          <TextField
            name="email"
            autoCompleteType="email"
            placeholder="example@gmail.com"
            textContentType="emailAddress"
            Icon={MailIcon}
            validateUserInput={validateUserInput}
          />
          <TextField
            name="password"
            autoCompleteType="password"
            placeholder="password"
            textContentType="password"
            Icon={PasswordIcon}
            validateUserInput={validateUserInput}
          />
          <Row>
            <Checkbox label="Remember me" Icon={CheckboxIcon} />
            <StyledText size="0.8rem" color="rgba(57, 196, 182,1)">
              Forgot password?
            </StyledText>
          </Row>
        </View>
      </MiddlePart>
      <BottomPart>
        <Button label="Back" onPress={goBack} />
      </BottomPart>
    </Container>
  );
};

export { Register };
