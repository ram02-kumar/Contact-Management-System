import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


export class  AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    throw new Error('Method not implemented.');
    if(localStorage.getItem('loginUser')){
      return true
    }
    else{
      this.router.navigate(['/login-signup'])
      return false
    }
  }

}
