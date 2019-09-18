import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from '.';
import { GamesEffects } from './games/games.effects';
import { GamesFacade } from './games/games.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([GamesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
  ],
  providers: [GamesFacade]
})
export class CoreStateModule {}
