import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setToken(value = '') {
    localStorage.setItem('verified', value);
  }

  getToken(): string {
    return localStorage.getItem('verified');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();

    return !!token;
  }
}
