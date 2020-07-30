import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { Button } from '../common';

// TODO: types for navigation
const Login = ({ navigation }: any) => {
  return (
    <View>
      <Text>LOGIN</Text>
      <Button label="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export { Login };
