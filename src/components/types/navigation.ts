import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { UpComingTournament } from '../home/tournament/_tournamentTypes';

export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type Navigation = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  Home: { userName: string } | undefined;
  Settings: undefined;
  TournamentDetails: { tournamentInfo: UpComingTournament };
};
