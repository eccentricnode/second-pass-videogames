import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { GamesFacade } from '@second-pass/core-state';
import { Game } from '@second-pass/core-data';

@Component({
  selector: 'second-pass-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  form: FormGroup;
  games$: Observable<Game[]> = this.gamesFacade.allGames$;
  selectedGame$: Observable<Game> = this.gamesFacade.selectedGame$;

  constructor(
    private gamesFacade: GamesFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.gamesFacade.loadGames();
    this.initForm();
    this.gamesFacade.mutations$.subscribe(_ => this.reset());
    this.reset();
  }

  selectGame(game) {
    this.gamesFacade.selectGame(game.id);
  }
  
  saveGame(game) {
    game.id ? this.gamesFacade.updateGame(game) : this.gamesFacade.createGame(game);
  }

  removeGame(game: Game) {
    this.gamesFacade.deleteGame(game);
    this.reset();
  }

  reset() {
    this.form.reset();
    this.selectGame({id: null});
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null, 
      name: ['', Validators.compose([Validators.required])],
      publisher: ['', Validators.compose([Validators.required])],
      released: ['', Validators.compose([Validators.required])],
    })
  }
}
