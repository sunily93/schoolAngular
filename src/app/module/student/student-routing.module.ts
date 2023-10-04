import { UpdateStudentComponent } from './student-componenet/update-student/update-student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './student-componenet/dashboard/dashboard.component';
import { StudentGuard } from 'src/app/student.guard';
import { ApplyLeaveComponent } from './student-componenet/apply-leave/apply-leave.component';
import { GetAllLeaveComponent } from './student-componenet/get-all-leave/get-all-leave.component';

const routes: Routes = [
  {
    path:"dashboard",
    component:DashboardComponent,
    canActivate:[StudentGuard]
  },
  {
    path:"leave",
    component:ApplyLeaveComponent,
    canActivate:[StudentGuard]
  },
  {
    path:"leaves",
    component:GetAllLeaveComponent,
    canActivate:[StudentGuard]
  },
  {
    path:"update",
    component:UpdateStudentComponent,
    canActivate:[StudentGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
