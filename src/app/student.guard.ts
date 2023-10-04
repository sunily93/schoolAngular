import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {
  constructor(private router:Router,private snak:MatSnackBar){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(StorageService.isAdminLoggedIn())
      {
        this.router.navigateByUrl("admin/dashboard");
        this.snak.open("You don't have access to this page","Close",{
          duration:5000
        });
        return false;
      }else if(!StorageService.hasToken())
      {
        StorageService.logout();
        this.router.navigateByUrl("/login");
        this.snak.open("You are not loggedIn","Close",{
          duration:5000
        });
        return false;
      }
      return true;
    }
}
