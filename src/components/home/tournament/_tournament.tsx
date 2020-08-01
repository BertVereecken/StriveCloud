import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { StyledText, Label, Row } from '../../common';
import { ClockIcon, PersonsIcon } from '../../../../assets/svg';
import { Time } from './_time';
import { UpComingTournament } from './_tournamentTypes';
interface ITournamentProps {
  item: UpComingTournament;
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

const StyledTouchableHightlight = styled.TouchableHighlight`
  border-radius: 0.5rem;
`;

const Tournament = ({ item, separators, openTournamentPage }: ITournamentProps) => {
  const handlePress = useCallback(() => {
    console.log(item);

    openTournamentPage(item._id);
  }, [item, openTournamentPage]);

  return (
    <StyledTouchableHightlight
      underlayColor="lightgrey"
      onPress={handlePress}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}
    >
      <TournamentWrapper>
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
    </StyledTouchableHightlight>
  );
};

export { Tournament };
