import React, { useEffect, useState, useCallback } from 'react';
import { Container, BodyContainer, StyledText, Spinner, StyledLogo } from '../common';
import { StackNavigationProps, Navigation } from '../types';
import axios from 'axios';
import styled from 'styled-components/native';
import { Tournaments } from './tournament';

const UPCOMING_EVENTS_URL = 'https://api.kayzr.com/api/tournaments/upcoming';
const striveCloudLogo = require('../../../assets/images/logo.png');

const HeaderPart = styled.View`
  flex: 0.2;
  background-color: ${({ theme: { purple } }) => purple};
  border-bottom-right-radius: 5rem;
  justify-content: center;
  align-items: center;
`;

const Home = ({ navigation, route }: StackNavigationProps<Navigation, 'Home'>) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchTournaments = useCallback(async () => {
    try {
      setLoading(true);
      const { data: tournaments } = await axios.get(UPCOMING_EVENTS_URL);

      setData(tournaments);
      setLoading(false);
    } catch (err) {
      setError(true);
      console.log(err);
      throw err;
    }
  }, []);

  // Fetch upcoming tournaments
  useEffect(() => {
    fetchTournaments();
  }, [fetchTournaments]);

  /**
   * Open tournamentsDetailsPage and pass the tournamentId.
   * @param tournamentId
   */
  const openTournamentPage = (tournamentId: string) => {
    navigation.navigate('TournamentDetails', {
      tournamentId,
    });
  };

  console.log(data);
  return (
    <Container>
      <HeaderPart>
        <StyledLogo resizeMode="contain" source={striveCloudLogo} />
      </HeaderPart>
      <BodyContainer>
        {loading && <Spinner />}
        {error && <StyledText>Error</StyledText>}
        {!loading && !error && <Tournaments data={data} openTournamentPage={openTournamentPage} />}
      </BodyContainer>
    </Container>
  );
};

export { Home };
