import { TournamentTypes } from '.';

export type GameMode = {
  games: string[];
  id: string;
  name: string;
  teamSize: number;
};

export type GameImage = {
  type: string;
  url: string;
};

export type PrizePool = {
  amount: number;
  currency: string;
  poolLimit: number;
};

export type Tournament = {
  gameMode: GameMode;
  id: string;
  images: GameImage[];
  interested: number;
  name: string;
  prizepool: PrizePool[];
  startAt: string;
  tournamentPage: string;
};

export type UpComingTournament = {
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
