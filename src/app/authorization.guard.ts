import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AutorizationService } from './autorization.service';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private _autorizationService: AutorizationService, private _router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._autorizationService.isAutorized) {
      return true;
    } else {
      this._router.navigate(['']);
      return false;
    }
  }
}
