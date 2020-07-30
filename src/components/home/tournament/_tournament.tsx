import React, { useCallback } from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { StyledText } from '../../common';
import { ClockIcon } from '../../../../assets/svg';
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
  index: number;
}

const TournamentWrapper = styled.View`
  background-color: white;
  margin-bottom: 0.5rem;
  height: 7rem;
  justify-content: space-between;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const LabelContainer = styled.View`
  background-color: green;
  height: fit-content;
  width: fit-content;
  padding: 0.3rem;
  max-width: 8rem;
  max-height: 2rem;
  border-radius: 0.2rem;
`;

const Label = ({ label }: any) => {
  return (
    <LabelContainer>
      <StyledText numberOfLines={1} size="0.7rem">
        {label}
      </StyledText>
    </LabelContainer>
  );
};
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
        <StyledText numberOfLines={1} size="0.8rem">
          {item.name}
        </StyledText>
        <Row>
          <ClockIcon />
          <Time Icon={ClockIcon} time={item.dateStart} />
        </Row>
        <Label label={item.game} />
      </TournamentWrapper>
    </TouchableHighlight>
  );
};

export { Tournament };
