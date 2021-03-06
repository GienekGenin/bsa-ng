import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsGuard implements CanActivate {
  state = true;

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (JSON.parse(localStorage.getItem('guard')) !== null) {
      this.state = JSON.parse(localStorage.getItem('guard')).forms;
    }
    if (this.state === false) {
      this.router.navigate(['dashboard']);
    }
    return this.state;
  }

  constructor(public router: Router) {
  }
}
