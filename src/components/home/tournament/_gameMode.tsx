import React from 'react';
import { StyledText, StyledTitle } from '../../common';
import styled from 'styled-components/native';
import { GameMode } from './_tournamentTypes';

interface IGameInfoProps {
  gameMode: GameMode;
}

const Box = styled.View`
  flex: ${({ flex }) => flex || 1};
  flex-direction: ${({ direction }) => direction || 'column'};
  padding: ${({ padding }) => padding || 0};
  width: ${({ width }) => width || '100%'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  margin: ${({ margin }) => margin || '0'};
`;

const GameModeInfo = ({ gameMode }: IGameInfoProps) => {
  console.log(gameMode);
  return (
    <Box flex={0.4} direction="row" margin="0 0 1rem 0">
      {/* COLUMN 1 */}
      <Box
        style={{ backgroundColor: 'red' }}
        padding="1rem"
        justifyContent="space-around"
        flex={0.5}
      >
        <StyledTitle margin="0">Game:</StyledTitle>
        <StyledTitle margin="0">Checkin:</StyledTitle>
        <StyledTitle margin="0">Team size:</StyledTitle>
      </Box>
      {/* COLUMN 2 */}
      <Box style={{ backgroundColor: 'green' }} padding="1rem" justifyContent="space-around">
        <StyledText>{gameMode.games[0]}</StyledText>
        <StyledText>test</StyledText>
        <StyledText>{gameMode.teamSize}</StyledText>
      </Box>
    </Box>
  );
};

export { GameModeInfo };
