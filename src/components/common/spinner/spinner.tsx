import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components/native';
import { Animated, Easing } from 'react-native';

const StyledLogo = styled.Image`
  width: 3.5rem;
  height: 3.5rem;
`;

const SpinnerWrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Spinner = () => {
  const spinValue = new Animated.Value(0);

  const startSpinning = useCallback(() => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.cubic,
      useNativeDriver: true,
    }).start(() => startSpinning());
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    startSpinning();
  }, [startSpinning]);

  return (
    <SpinnerWrapper>
      <Animated.View style={{ width: '3.5rem', transform: [{ rotate: spin }] }}>
        <StyledLogo
          resizeMode="contain"
          source={require('../../../../assets/images/kayzrLogo.png')}
        />
      </Animated.View>
    </SpinnerWrapper>
  );
};

export { Spinner };
