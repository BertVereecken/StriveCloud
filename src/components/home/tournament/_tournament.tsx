import React, { useCallback } from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { StyledText } from '../../common';

type PrizePool = {
  amount: number;
  currency: string;
  poolLimit: number;
};

type Tournament = {
  checkinClose: string;
  checkinOpen: string;
  date: string;
  dateEnd: string;
  dateStart: string;
  game: string;
  interested: number;
  location: string;
  name: string;
  platform: string;
  prizePool: PrizePool[];
  tournamentPage: string;
  _id: string;
};

interface ITournamentProps {
  item: Tournament;
  separators: any;
  index: number;
}

const TournamentWrapper = styled.View`
  background-color: lightcyan;
  margin-bottom: 0.5rem;
`;

const Tournament = ({ item, separators }: ITournamentProps) => {
  const handlePress = useCallback(() => {
    console.log(item);
  }, [item]);

  return (
    <TouchableHighlight
      onPress={handlePress}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}
    >
      <TournamentWrapper>
        <StyledText size="0.8rem">{item.name}</StyledText>
      </TournamentWrapper>
    </TouchableHighlight>
  );
};

export { Tournament };
