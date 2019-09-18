import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '@second-pass/core-data';

@Component({
  selector: 'second-pass-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent {
  @Input() games: Game[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  select(game: Game) {
    this.selected.emit(game);
  }

  remove(game: Game) {
    this.deleted.emit(game);
  }
}
