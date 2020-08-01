import React from 'react';
import { StyledText } from '../../common';
import styled from 'styled-components/native';
import { StyledTitle } from '../../common/styledComponents';
import { PrizePool } from './_tournamentTypes';

interface IPrizePoolProps {
  prizePoolData: PrizePool[];
}

const Box = styled.View`
  flex: ${({ flex }) => flex || 1};
  flex-direction: ${({ direction }) => direction || 'column'};
  padding: ${({ padding }) => padding || 0};
  width: ${({ width }) => width || '100%'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  margin: ${({ margin }) => margin || '0'};
`;

const PrizePoolInfo = ({ prizePoolData }: IPrizePoolProps) => {
  return (
    <Box flex={0.3} direction="row" margin="0 0 1rem 0">
      {/* COLUMN 1 */}
      <Box
        style={{ backgroundColor: 'red' }}
        padding="1rem"
        justifyContent="space-around"
        flex={0.5}
      >
        <StyledTitle margin="0">Amount:</StyledTitle>
        <StyledTitle margin="0">Currency:</StyledTitle>
        <StyledTitle margin="0">Poollimit:</StyledTitle>
      </Box>
      {/* COLUMN 2 */}
      <Box style={{ backgroundColor: 'green' }} padding="1rem" justifyContent="space-around">
        <StyledText>{prizePoolData[0].amount}</StyledText>
        <StyledText>{prizePoolData[0].currency}</StyledText>
        <StyledText>{prizePoolData[0].poolLimit}</StyledText>
      </Box>
    </Box>
  );
};

export { PrizePoolInfo };
