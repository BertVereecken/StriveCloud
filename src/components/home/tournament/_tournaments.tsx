import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Tournament } from './_tournament';
import { UpComingTournament } from './_tournamentTypes';

interface ITournamentsProps {
  data: UpComingTournament[];
  openTournamentPage: (tournamentId: string) => void;
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
