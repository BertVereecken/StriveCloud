import React from 'react';
import { StyledText, StyledTitle, Box } from '../../common';
import { GameMode, UpComingTournament } from './_tournamentTypes';
import { Time } from './_time';

interface IGameInfoProps {
  gameMode: GameMode;
  tournamentInfo: UpComingTournament;
}

const GameModeInfo = ({ gameMode, tournamentInfo }: IGameInfoProps) => {
  return (
    <Box flex={0.5} direction="row" margin="1.5rem 0" radius="0.5rem" bgColor="lightgrey">
      {/* COLUMN 1 */}
      <Box padding="1rem" justifyContent="space-around" flex={0.5}>
        <StyledTitle margin="0">Game:</StyledTitle>
        <StyledTitle margin="0">Gamestart:</StyledTitle>
        <StyledTitle margin="0">Checkin:</StyledTitle>
        <StyledTitle margin="0">Interested:</StyledTitle>
        <StyledTitle margin="0">Team size:</StyledTitle>
      </Box>
      {/* COLUMN 2 */}
      <Box padding="1rem" justifyContent="space-around">
        <StyledText>{gameMode.games[0]}</StyledText>
        <Time time={tournamentInfo.dateStart} />
        <StyledText>
          <Time time={tournamentInfo.checkinOpen} onlyDisplayTime /> {' --> '}
          <Time time={tournamentInfo.checkinClose} onlyDisplayTime />
        </StyledText>
        <StyledText>{tournamentInfo.interested}</StyledText>
        <StyledText>{gameMode.teamSize}</StyledText>
      </Box>
    </Box>
  );
};

export { GameModeInfo };
