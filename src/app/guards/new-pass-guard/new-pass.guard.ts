import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewPassGuard implements CanActivate {
  state = false;
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (JSON.parse(localStorage.getItem('guard')) !== null) {
      this.state = JSON.parse(localStorage.getItem('guard')).new_pass;
    }
    if (this.state === false) {
      this.router.navigate(['login']);
    }
    return this.state;
  }
  constructor(public router: Router) {
  }
}
