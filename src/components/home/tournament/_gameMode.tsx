import React from 'react';
import { Container, StyledText } from '../../common';
import styled from 'styled-components/native';

type GameMode = {
  games: string[];
  id: string;
  name: string;
  teamSize: number;
};

interface IGameInfoProps {
  gameInfo: GameMode;
}

const Box = styled.View`
  flex: ${({ flex }) => flex || 1};
  flex-direction: ${({ direction }) => direction || 'column'};
  padding: ${({ padding }) => padding || 0};
  width: ${({ width }) => width || '100%'};
  justify-content: center;
  margin: ${({ margin }) => margin || '0'};
`;

const GameMode = ({ GameMode }: IGameInfoProps) => {
  return (
    <Box flex={0.4} direction="row" margin="0 0 1rem 0">
      {/* COLUMN 1 */}
      <Box style={{ backgroundColor: 'red' }} padding="1rem">
        <StyledText margin="0 0 0.7rem 0">Game:</StyledText>
        <StyledText margin="0 0 0.7rem 0">Checkin:</StyledText>
      </Box>
      {/* COLUMN 2 */}
      <Box style={{ backgroundColor: 'green' }} padding="1rem">
        <StyledText margin="0 0 0.7rem 0">COLUMN 2</StyledText>
        <StyledText margin="0 0 0.7rem 0">COLUMN 2</StyledText>
      </Box>
    </Box>
  );
};

export { GameMode };
