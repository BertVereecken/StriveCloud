import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Tournament } from './_tournament';

type PrizePool = {
  amount: number;
  currency: string;
  poolLimit: number;
};

type TournamentProps = {
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

interface ITournamentsProps {
  data: TournamentProps[];
}

const Tournaments = ({ data }: ITournamentsProps) => {
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item._id}
      renderItem={({ item, index, separators }) => {
        return <Tournament item={item} separators={separators} index={index} />;
      }}
    />
  );
};

export { Tournaments };
