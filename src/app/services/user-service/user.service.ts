import {Injectable} from '@angular/core';

interface UserServiceInterface {
  user: {
    name: string,
    surname: string,
    date: string,
    email: string,
    password: string
  };
}

@Injectable()
export class UserService implements UserServiceInterface {

  private isUserLoggedIn;
  public user: {
    name: string,
    surname: string,
    date: string,
    email: string,
    password: string
  };

  constructor() {
    this.isUserLoggedIn = false;
  }

  pushUserToLocalStorage(user) {
    if (localStorage.getItem('users') === null) {
      const users = [];
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      const users = JSON.parse(localStorage.getItem('users'));
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    }
    console.log(JSON.parse(localStorage.getItem('users')));
    this.setUserLoggedIn(user);
  }

  setUserLoggedIn(_user) {
    this.isUserLoggedIn = true;
    this.user = _user;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  logOut() {
    return this.isUserLoggedIn = false;
  }

}
