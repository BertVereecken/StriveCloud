import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import styled from 'styled-components/native';
import { Container } from '../../common';

export const SLIDE_HEIGHT = 0.6 * height;

interface SlideProps {
  label: string;
}

const styles = StyleSheet.create({
  container: {
    width,
  },
  labelContainer: {
    justifyContent: 'center',
    height: 50,
  },
  label: {
    color: 'white',
    fontFamily: 'SFPro-Bold',
    fontSize: 50,
    lineHeight: 50,
  },
});

const Label = styled.Text`
  color: white;
  font-family: 'SFPro-Bold';
  font-size: 3rem;
  line-height: 3rem;
`;

const Slide = React.memo(({ label }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: -(width / 2 - 50) },
    { rotate: '-90deg' },
  ];

  return (
    <Container>
      <View style={[styles.labelContainer, { transform }]}>
        <Label>{label}</Label>
      </View>
    </Container>
  );
});

export { Slide };
