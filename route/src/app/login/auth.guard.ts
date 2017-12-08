import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private loginService: LoginService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.isLoggdin) {
      return true;
    }

    this.router.navigate(['login']);
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(childRoute,state);
  }
}
