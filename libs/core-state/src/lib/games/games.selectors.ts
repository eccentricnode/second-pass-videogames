import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromGames from './games.reducer';
import { emptyGame } from '@second-pass/core-data';

// Lookup the 'Games' feature state managed by NgRx
export const selectGamesState = createFeatureSelector<fromGames.GamesState>('games');

export const selectGamesIds = createSelector(
  selectGamesState,
  fromGames.selectGamesIds
);

export const selectGamesEntities = createSelector(
  selectGamesState,
  fromGames.selectGameEntities
);

export const selectAllGames = createSelector(
  selectGamesState,
  fromGames.selectAllGames
);

export const selectCurrentGameId = createSelector(
  selectGamesState,
  fromGames.getSelectedGameId
);

export const selectCurrentGame = createSelector(
  selectGamesEntities,
  selectCurrentGameId,
  (gamesEntities, gameId) => {
    return gameId ? gamesEntities[gameId] : Object.assign({}, emptyGame);
  }
);
