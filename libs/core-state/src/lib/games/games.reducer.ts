import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Game } from '@second-pass/core-data';
import { GamesAction, GamesActionTypes, Games } from './games.actions';

export interface GamesState extends EntityState<Game> {
  selectedGameId: string | null;
}

export const gamesAdapter: EntityAdapter<Game> = createEntityAdapter<Game>();

export const initialState: GamesState = gamesAdapter.getInitialState({
  selectedGameId: null,
});

export function gamesReducer(state: GamesState = initialState, action: GamesAction) {
  switch (action.type) {
    case GamesActionTypes.GAME_SELECTED: {
      return Object.assign({}, state, { selectedGameId: action.payload });
    }

    case GamesActionTypes.GAMES_LOADED: {
      return gamesAdapter.upsertMany(action.payload, state);
    }

    case GamesActionTypes.GAME_ADDED: {
      return gamesAdapter.addOne(action.payload, state);
    }

    case GamesActionTypes.GAME_UPDATED: {
      return gamesAdapter.upsertOne(action.payload, state);
    }

    case GamesActionTypes.GAME_DELETED: {
      return gamesAdapter.removeOne(action.payload.id, state);
    }

    default: 
      return state;
  }
}

export const getSelectedGameId = (state: GamesState) => state.selectedGameId;

// get the selectors

export const {
  selectIds: selectGamesIds,
  selectEntities: selectGameEntities,
  selectAll: selectAllGames,
  selectTotal: selectGamesTotal
} = gamesAdapter.getSelectors();