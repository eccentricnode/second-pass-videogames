import { Injectable } from '@angular/core';

import { filter } from 'rxjs/operators';
import { select, Store, ActionsSubject } from '@ngrx/store';

import { selectAllGames, selectCurrentGame } from './games.selectors';
import { Game } from '@second-pass/core-data';
import { GamesState } from './games.reducer';
import * as GamesActions from './games.actions';
import { GamesActionTypes } from './games.actions';

@Injectable()
export class GamesFacade {
    allGames$ = this.store.pipe(select(selectAllGames));
    selectedGame$ = this.store.pipe(select(selectCurrentGame));

    mutations$ = this.actions$
        .pipe(
            filter(action =>
                action.type === GamesActionTypes.ADD_GAME
                || action.type === GamesActionTypes.UPDATE_GAME
                || action.type === GamesActionTypes.DELETE_GAME
            )
        );

    constructor(private store: Store<GamesState>, private actions$: ActionsSubject) { }

    selectGame(gameId: string) {
        this.store.dispatch(new GamesActions.GameSelected(gameId));
    }

    loadGames() {
        this.store.dispatch(new GamesActions.LoadGames());
    }

    createGame(game: Game) {
        this.store.dispatch(new GamesActions.AddGame(game));
    }

    updateGame(game: Game) {
        this.store.dispatch(new GamesActions.UpdateGame(game));
    }

    deleteGame(game: Game) {
        this.store.dispatch(new GamesActions.DeleteGame(game));
    }
}