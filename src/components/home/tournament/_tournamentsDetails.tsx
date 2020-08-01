import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { StyledText, Button, Container, StyledTitle, BodyContainer, Spinner } from '../../common';
import axios from 'axios';
import { Navigation, StackNavigationProps } from '../../types';
import styled from 'styled-components/native';
import { Time } from './_time';
import { ClockIcon } from '../../../../assets/svg';
import { PrizePoolInfo } from './_prizePool';
import { Row } from '../../common/styledComponents';
import { GameModeInfo } from './_gameMode';
import { Tournament } from './_tournamentTypes';

const TOURNAMENT_DETAILS_BASE_URL = 'https://api.kayzr.com/api/tournaments/';

const BannerWrapper = styled.View``;

const Banner = styled.View`
  background-image: url(${({ image }) => image});
  width: 100%;
  height: 15rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const BannerHeader = styled.View`
  background-color: ${({ theme: { blue } }) => blue || 'white'};
  border-radius: 0.5rem;
  width: 75%;
  position: absolute;
  align-items: center;
  top: 85%;
  left: 12.5%;
  padding: 1rem;
`;

const TournamentsDetails = ({
  navigation,
  route,
}: StackNavigationProps<Navigation, 'TournamentDetails'>) => {
  const [data, setData] = useState<Tournament>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(data);
  const tournamentId = useMemo(() => {
    return route.params.tournamentId;
  }, [route.params.tournamentId]);

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const fetchTournamentDetails = useCallback(async () => {
    try {
      setLoading(true);

      const { data: tournamentDetails } = await axios.get(
        `${TOURNAMENT_DETAILS_BASE_URL}${tournamentId}`,
      );

      setData(tournamentDetails);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(true);
      throw err;
    }
  }, [tournamentId]);

  useEffect(() => {
    if (!tournamentId) return;

    fetchTournamentDetails();
  }, [fetchTournamentDetails, tournamentId]);

  return (
    <Container>
      {loading && <Spinner />}
      {data && !loading && !error && (
        <>
          <BannerWrapper>
            <Banner image={data?.images[2].url} />
            <BannerHeader bgColor="lightgrey">
              <StyledTitle color="white" margin="0 0 1rem 0" numberOfLines={1}>
                {data.name}
              </StyledTitle>
              <Time Icon={ClockIcon} time={data.startAt} color="white" />
            </BannerHeader>
          </BannerWrapper>

          <BodyContainer style={{ alignItems: 'center' }}>
            <GameModeInfo gameMode={data.gameMode} />
            <PrizePoolInfo prizePoolData={data.prizepool} />
            <Row>
              <Button label="Invite Friends" width="8rem" />
              <Button label="Sign up" width="8rem" />
            </Row>
            <Button label="Terug" onPress={goBack} width="8rem" />
          </BodyContainer>
        </>
      )}
    </Container>
  );
};

export { TournamentsDetails };
