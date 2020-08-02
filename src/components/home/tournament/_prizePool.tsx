import React from 'react';
import { StyledText } from '../../common';
import styled from 'styled-components/native';
import { StyledTitle, Box } from '../../common/styledComponents';
import { PrizePool } from './_tournamentTypes';

interface IPrizePoolProps {
  prizePoolData: PrizePool[];
}

const PrizePoolInfo = ({ prizePoolData }: IPrizePoolProps) => {
  return (
    <Box flex={0.3} direction="row" margin="0 0 1rem 0" radius="0.5rem" bgColor="lightgrey">
      {/* COLUMN 1 */}
      <Box padding="1rem" justifyContent="space-around" flex={0.5}>
        <StyledTitle margin="0">Amount:</StyledTitle>
        <StyledTitle margin="0">Currency:</StyledTitle>
        <StyledTitle margin="0">Poollimit:</StyledTitle>
      </Box>
      {/* COLUMN 2 */}
      <Box padding="1rem" justifyContent="space-around">
        <StyledText>{prizePoolData[0].amount}</StyledText>
        <StyledText>{prizePoolData[0].currency}</StyledText>
        <StyledText>{prizePoolData[0].poolLimit}</StyledText>
      </Box>
    </Box>
  );
};

export { PrizePoolInfo };
