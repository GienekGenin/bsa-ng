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

const users = [
  {id: 1, name: 'Vasia', surname: 'Pupkin', password: '111', date: '12/03/1965', email: 'vasia@gmail.com'},
  {id: 2, name: 'Sveta', surname: 'Zajcew', password: '111', date: '13/01/1961', email: 'sveta@gmail.com'},
  {id: 3, name: 'Chmo', surname: 'Moiseew', password: '111', date: '18/03/1962', email: 'chmo@gmail.com'},
  {id: 4, name: 'Lola', surname: 'Porosh', password: '111', date: '25/12/1994', email: 'lola@gmail.com'},
  {id: 5, name: 'Doll', surname: 'Timosh', password: '111', date: '16/05/1981', email: 'doll@gmail.com'},
  {id: 6, name: 'Mr', surname: 'Azarow', password: '111', date: '22/08/1985', email: 'mr@gmail.com'},
  {id: 7, name: 'Wowa', surname: 'Trish', password: '111', date: '21/03/1993', email: 'wowa@gmail.com'},
  {id: 8, name: 'Kon', surname: 'Nikol', password: '111', date: '14/01/1997', email: 'kon@gmail.com'},
  {id: 9, name: 'Rock', surname: 'Yos', password: '111', date: '4/04/1996', email: 'rock@gmail.com'}
];

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
      user.id = 10;
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      const _users = JSON.parse(localStorage.getItem('users'));
      user.id = _users[_users.length - 1].id + 1;
      _users.push(user);
      localStorage.setItem('users', JSON.stringify(_users));
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
