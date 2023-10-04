import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { NoAuthGuard } from './no-auth.guard';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent,
    canActivate:[NoAuthGuard]
  },
  {
    path:"admin",
    loadChildren:()=> import("./module/admin/admin.module").then(m=>m.AdminModule)
  },
  {
    path:"student",
    loadChildren:()=> import("./module/student/student.module").then(s=>s.StudentModule)
  },
  // {
  //   path:"user",
  //   component:UserComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
