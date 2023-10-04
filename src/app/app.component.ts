import { Component } from '@angular/core';
import { StorageService } from './storage.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'School-Management';

  isAdminLoggedIn:boolean;
  isStudentLoggedIn: boolean;
  constructor(private router:Router){}

  ngOnInit()
  {
    this.updateUserLoggedStatus();
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd)
      {
        this.updateUserLoggedStatus();
      }
    })
  }

  logout(){
    StorageService.logout();
    this.router.navigateByUrl("/login");
  }

  private updateUserLoggedStatus()
  {
    this.isAdminLoggedIn=StorageService.isAdminLoggedIn();
    this.isStudentLoggedIn=StorageService.isStudentLoggedIn();
  }

}
