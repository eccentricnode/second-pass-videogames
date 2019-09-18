import { Action } from '@ngrx/store';
import { Game } from '@second-pass/core-data';

export enum GamesActionTypes {
  GAMES_ACTION  = '[GAMES] Games Action',
  GAME_SELECTED = '[GAMES] Game Selected',
  LOAD_GAMES    = '[GAMES] Load Games',
  GAMES_LOADED  = '[GAMES] Game Loaded',
  ADD_GAME      = '[GAMES] Add Game',
  GAME_ADDED    = '[GAMES] Game Added',
  UPDATE_GAME   = '[GAMES] Update Game',
  GAME_UPDATED  = '[GAMES] Game Updated',
  DELETE_GAME   = '[GAMES] Delete Game',
  GAME_DELETED  = '[GAMES] Game Deleted',
}

export class Games implements Action {
  readonly type = GamesActionTypes.GAMES_ACTION;
}

export class GameSelected implements Action {
  readonly type = GamesActionTypes.GAME_SELECTED;
  constructor(public payload) { }
}

export class LoadGames implements Action {
  readonly type = GamesActionTypes.LOAD_GAMES;
  constructor() { }
}

export class GamesLoaded implements Action {
  readonly type = GamesActionTypes.GAMES_LOADED;
  constructor(public payload: Game[]) { }
}

export class AddGame implements Action {
  readonly type = GamesActionTypes.ADD_GAME;
  constructor(public payload: Game) { }
}

export class GameAdded implements Action {
  readonly type = GamesActionTypes.GAME_ADDED;
  constructor(public payload: Game) { }
}

export class UpdateGame implements Action {
  readonly type = GamesActionTypes.UPDATE_GAME;
  constructor(public payload: Game) { }
}

export class GameUpdated implements Action {
  readonly type = GamesActionTypes.GAME_UPDATED;
  constructor(public payload: Game) { }
}

export class DeleteGame implements Action {
  readonly type = GamesActionTypes.DELETE_GAME;
  constructor(public payload: Game) { }
}

export class GameDeleted implements Action {
  readonly type = GamesActionTypes.GAME_DELETED;
  constructor(public payload: Game) { }
}

export type GamesAction = Games 
  | GameSelected
  | LoadGames
  | GamesLoaded
  | AddGame
  | GameAdded
  | UpdateGame
  | GameUpdated
  | DeleteGame
  | GameDeleted
;