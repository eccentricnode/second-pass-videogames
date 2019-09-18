import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE_URL = `https://video-games-khnlftutcr.now.sh`;

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  model = `videogames`;

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get<any>(this.getUrl())
      .pipe(map(res => res));
  }

  create(game) {
    return this.http.post(this.getUrl(), game);
  }

  update(game) {
    return this.http.patch(this.getUrlForId(game.id), game);
  }

  delete(gameId) {
    return this.http.delete(this.getUrlForId(gameId));
  }
}
