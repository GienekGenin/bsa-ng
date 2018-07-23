import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {UserService} from '../services/user-service/user.service';
import {FormControl} from '@angular/forms';
import {FormValidationService} from '../services/validation/form-validation.service';

export interface UserData {
  id: string;
  name: string;
  surname: string;
  email: string;
  date: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  edit = false;
  user: {
    id: number,
    name: string,
    surname: string,
    email: string,
    date: string
  };
  text_field: FormControl;
  text_field1: FormControl;
  getErrorMsg: Function;
  displayedColumns: string[] = ['id', 'name', 'surname', 'email', 'date'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public userService: UserService, public formValidation: FormValidationService) {
    // из-а того что ведут себя как будто связаны по ссылке
    this.text_field = formValidation.text_field;
    this.text_field1 = formValidation._text_field;
    this.getErrorMsg = formValidation.getEmptyFieldErrorMessage;
    this.user = userService.getUserLoggedIn();
    const users = JSON.parse(localStorage.getItem('users'));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('last_user'));
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  saveProfileChanges(name, surname) {
    if (name && surname) {
      this.edit = !this.edit;
      this.user.name = name;
      this.user.surname = surname;
      localStorage.setItem('last_user', JSON.stringify(this.user));
    } else {
      alert('Provide values or cancel');
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
