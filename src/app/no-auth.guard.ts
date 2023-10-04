import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(StorageService.hasToken() && StorageService.isStudentLoggedIn())
      {
        this.router.navigateByUrl("student/dashboard");
        return false;
      }else if(StorageService.hasToken() && StorageService.isAdminLoggedIn())
      {
        this.router.navigateByUrl("admin/dashboard");
        return false;
      }
      return true;
  }

}
