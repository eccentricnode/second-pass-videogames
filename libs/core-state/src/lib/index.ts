import { ActionReducerMap } from '@ngrx/store';

import * as fromGames from './games/games.reducer';

export interface AppState {
    games: fromGames.GamesState;
}

export const reducers: ActionReducerMap<AppState> = {
    games: fromGames.gamesReducer,
}