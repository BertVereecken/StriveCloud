import React from 'react';
import { StyledText } from '../../common';
import styled from 'styled-components/native';
import { Row } from '../../common/styledComponents';

type PrizePool = {
  amount: number;
  currency: string;
  poolLimit: number;
};

interface IPrizePoolProps {
  prizePoolData: PrizePool[];
}

const Box = styled.View`
  border: 1px solid green;
  flex: ${({ flex }) => flex || 1};
  flex-direction: ${({ direction }) => direction || 'column'};
  padding: ${({ padding }) => padding || 0};
  width: ${({ width }) => width || '100%'};
  justify-content: center;
  margin: ${({ margin }) => margin || '0'};
`;

const PrizePool = ({ prizePoolData }: IPrizePoolProps) => {
  console.log(prizePoolData);
  return (
    <Box flex={0.2} padding="1rem" margin="0 0 1rem 0" width="75%">
      <Row align="space-evenly" margin="0 0 0.5rem 0">
        <StyledText>Amount:</StyledText>
        <StyledText>{prizePoolData[0].amount}</StyledText>
      </Row>
      <Row align="space-evenly" margin="0 0 0.5rem 0">
        <StyledText>Currency:</StyledText>
        <StyledText>{prizePoolData[0].currency}</StyledText>
      </Row>
      <Row align="space-evenly" margin="0 0 0.5rem 0">
        <StyledText>Poollimit:</StyledText>
        <StyledText>{prizePoolData[0].poolLimit}</StyledText>
      </Row>
    </Box>
  );
};

export { PrizePool };
