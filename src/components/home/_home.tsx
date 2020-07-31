import React, { useEffect, useState, useCallback } from 'react';
import { Container, BodyContainer, StyledText } from '../common';
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
  /* TODO: change the radius to a constant */
`;

const StyledImage = styled.Image`
  width: 10rem;
  height: 4rem;
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

  // Fetch upcoming tournaments as soon as components renders
  useEffect(() => {
    fetchTournaments();
  }, [fetchTournaments]);

  const openTournamentPage = (tournamentId: string) => {
    console.log(tournamentId);
    navigation.navigate('TournamentDetails', {
      tournamentId,
    });
  };
  console.log(data);
  return (
    <Container>
      <HeaderPart>
        <StyledImage resizeMode="contain" source={striveCloudLogo} />
      </HeaderPart>
      <BodyContainer>
        {loading && <StyledText> Loading</StyledText>}
        {error && <StyledText> Error</StyledText>}
        {!loading && !error && <Tournaments data={data} openTournamentPage={openTournamentPage} />}
      </BodyContainer>
    </Container>
  );
};

export { Home };
