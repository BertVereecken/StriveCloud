import React from 'react';
import { Tournament } from './_tournament';
import { UpComingTournament } from './_tournamentTypes';
import { FlatList } from 'react-native';

interface ITournamentsProps {
  data: UpComingTournament[];
  openTournamentPage: (tournamentInfo: UpComingTournament) => void;
}

const Tournaments = ({ data, openTournamentPage }: ITournamentsProps) => {
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item._id}
      renderItem={({ item, index, separators }) => {
        return (
          <Tournament
            item={item}
            separators={separators}
            index={index}
            openTournamentPage={openTournamentPage}
          />
        );
      }}
    />
  );
};

export { Tournaments };
