import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../services/authservice.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private _router: Router, private _authService: AuthserviceService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (this._authService.isAuthenticated()) {
      
          if (next.data!=null && next.data.role!=null)
          {
              return this._authService.hasRole(next.data.role);
          }
          return true;
      }

      // navigate to login page
      this._router.navigate(['/inicio-sesion']);
      // you can save redirect url so after authing we can move them back to the page they requested
      return false;
  }
}
