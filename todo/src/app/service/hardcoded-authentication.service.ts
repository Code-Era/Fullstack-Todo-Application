import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password): boolean {


    if (username === 's@gmail.com' && password === 'dummy') {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    return false;

  }

  isUSerLoogedIn() {

    let user = sessionStorage.getItem('authenticaterUser');
    return !(user == null);
  }

  logout() {
     sessionStorage.removeItem('authenticaterUser');
  }


}
