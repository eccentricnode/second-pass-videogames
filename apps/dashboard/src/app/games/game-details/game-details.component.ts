import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '@second-pass/core-data';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'second-pass-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent {
  selectedGame: Game;

  @Input() group: FormGroup;
  @Input() set game(value: Game) {
    this.selectedGame = value;
    if(!value) return;
    this.group.patchValue({
      id: value.id,
      name: value.name,
      publisher: value.publisher,
      released: value.released
    });
  }

  @Output() submitted = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  submit(directive: NgForm) {
    if (this.group.value) {
      this.submitted.emit(this.group.value);
      directive.resetForm();
    }
  }

  cancel() {
    this.cancelled.emit();
  }

  validateField(control: string, directive: NgForm) {
    return this.group.get(control).invalid && directive.submitted;
  }

  determineUpdate() {
    return !!this.group.value.id;
  }
}
