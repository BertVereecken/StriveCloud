import React, { useCallback, useState, useMemo } from 'react';
import styled from 'styled-components/native';
import {
  Button,
  Container,
  BodyContainer,
  StyledTitle,
  StyledText,
  TextField,
  Checkbox,
} from '../common';
import { MailIcon, PasswordIcon, CheckboxIcon } from '../../../assets/svg';
import { Navigation, StackNavigationProps } from '../types';
import { StyleSheet } from 'react-native';

const StyledView = styled.View`
  flex: 1;
  background-color: ${({ bgColor }) => bgColor};
  ${StyleSheet.absoluteFillObject};
`;

const HeaderPart = styled.View`
  flex: 0.2;
  background-color: ${({ theme: { purple } }) => purple};
  border-bottom-right-radius: 5rem;
  /* TODO: change the radius to a constant */
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
  margin: ${({ margin }) => margin || 0};
`;

interface IUserInputData {
  email: string;
  password: string;
}

const Login = ({ navigation }: StackNavigationProps<Navigation, 'Login'>) => {
  const [userInput, setUserInput] = useState<IUserInputData>({
    email: '',
    password: '',
  });

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleUserInput = useCallback(
    (input: string, name: string) => {
      console.log(input, name);
      setUserInput({
        ...userInput,
        [name]: input,
      });
    },

    [setUserInput, userInput],
  );

  const loginCredentialsAreValid = useMemo(() => {
    return userInput.email === 'test' && userInput.password === 'test';
  }, [userInput]);

  const goToHomeScreen = useCallback(() => {
    navigation.navigate('Home', {
      userName: 'Arnaud',
    });
  }, [navigation]);

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
        <BodyContainer>
          <StyledTitle size="1.5rem" margin="0 0 2rem 0">
            Log in here
          </StyledTitle>
          <StyledText margin="0 0 2rem 0">Log in to start playing tournaments online</StyledText>
          <TextField
            name="email"
            autoCompleteType="email"
            placeholder="example@gmail.com"
            textContentType="emailAddress"
            Icon={MailIcon}
            handleUserInput={handleUserInput}
          />
          <TextField
            name="password"
            autoCompleteType="password"
            placeholder="password"
            textContentType="password"
            Icon={PasswordIcon}
            handleUserInput={handleUserInput}
          />
          <Row margin="0 0 2rem 0">
            <Checkbox label="Remember me" Icon={CheckboxIcon} />
            <StyledText size="0.8rem" color="rgba(57, 196, 182,1)">
              Forgot password?
            </StyledText>
          </Row>
          <Button label="Log in" disabled={!loginCredentialsAreValid} onPress={goToHomeScreen} />
        </BodyContainer>
      </MiddlePart>
      <BottomPart>
        <Button label="Back" onPress={goBack} />
      </BottomPart>
    </Container>
  );
};

export { Login };
