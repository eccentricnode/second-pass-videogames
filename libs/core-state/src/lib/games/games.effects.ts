import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { GamesState } from './games.reducer';
import { 
  GamesActionTypes,
  LoadGames,
  GamesLoaded,
  AddGame,
  GameAdded,
  UpdateGame,
  GameUpdated,
  GameDeleted,
  DeleteGame,
} from './games.actions';
import { GamesService, Game } from '@second-pass/core-data';

@Injectable()
export class GamesEffects {
  @Effect() loadGames$ = this.dataPersistence.fetch(GamesActionTypes.LOAD_GAMES, {
    run: (action: LoadGames, state: GamesState) => {
      return this.gamesService.all().pipe(map((res: Game[]) => new GamesLoaded(res)));
    },

    onError: (action: LoadGames, error) => {
      console.error('Error', error);
    }
  });

  @Effect() addGame$ = this.dataPersistence.pessimisticUpdate(GamesActionTypes.ADD_GAME, {
    run: (action: AddGame, state: GamesState) => {
      return this.gamesService.create(action.payload).pipe(map((res: Game) => new GameAdded(res)));
    },

    onError: (action: AddGame, error) => {
      console.error('Error', error);
    }
  });

  @Effect() updateGame$ = this.dataPersistence.pessimisticUpdate(GamesActionTypes.UPDATE_GAME, {
    run: (action: UpdateGame, state: GamesState) => {
      return this.gamesService.update(action.payload).pipe(map((res: Game) => new GameUpdated(res)));
    },

    onError: (action: UpdateGame, error) => {
      console.error('Error', error);
    }
  });

  @Effect() deleteGame$ = this.dataPersistence.pessimisticUpdate(GamesActionTypes.DELETE_GAME, {
    run: (action: DeleteGame, state: GamesState) => {
      return this.gamesService.delete(action.payload.id).pipe(map(_ => new GameDeleted(action.payload)));
    },

    onError: (action: DeleteGame, error) => {
      console.error('Error', error);
    }
  })

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<GamesState>,
    private gamesService: GamesService
  ) {}
}
