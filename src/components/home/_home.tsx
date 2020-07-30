import React, { useEffect, useState } from 'react';
import { Container, BodyContainer } from '../common';
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

  const fetchTournaments = async () => {
    try {
      setLoading(true);
      const { data: tournaments } = await axios.get(UPCOMING_EVENTS_URL);

      setData(tournaments);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  console.log(data);
  return (
    <Container>
      <HeaderPart>
        <StyledImage resizeMode="contain" source={striveCloudLogo} />
      </HeaderPart>
      <BodyContainer>
        <Tournaments data={data} />
      </BodyContainer>
    </Container>
  );
};

export { Home };
