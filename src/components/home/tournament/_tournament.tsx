import React, { useCallback } from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { StyledText, Label } from '../../common';
import { ClockIcon, PersonsIcon } from '../../../../assets/svg';
import { Time } from './_time';
import { Row } from '../../common/styledComponents';

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
  index?: number;
  openTournamentPage: (tournamentId: string) => void;
}

const TournamentWrapper = styled.View`
  background-color: white;
  margin-bottom: 0.5rem;
  height: 7rem;
  justify-content: space-between;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const Tournament = ({ item, separators, openTournamentPage }: ITournamentProps) => {
  const handlePress = useCallback(() => {
    console.log(item);

    openTournamentPage(item._id);
  }, [item, openTournamentPage]);

  return (
    <TouchableHighlight
      style={{ border: '1px solid red' }}
      onPress={handlePress}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}
    >
      <TournamentWrapper style={{ border: '1px solid red' }}>
        <StyledText numberOfLines={1} size="0.8rem">
          {item.name}
        </StyledText>
        <Row>
          <Time Icon={ClockIcon} time={item.dateStart} />
        </Row>
        <Row align="space-between">
          <Label label={item.game} />
          <Label
            label={item.interested}
            IconRight={PersonsIcon}
            iconHeight="0.8rem"
            iconWidth="0.8rem"
          />
        </Row>
      </TournamentWrapper>
    </TouchableHighlight>
  );
};

export { Tournament };
