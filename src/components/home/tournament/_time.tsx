import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { StyledText } from '../../common';

const Time = ({ time }: any) => {
  const formattedTime = () => {
    const unformattedDate = new Date(time);
    const newDate = unformattedDate.toLocaleString('nl-BE', {
      hour12: false,
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    return newDate;
  };

  return (
    <View>
      <StyledText>{formattedTime()}</StyledText>
    </View>
  );
};

export { Time };
