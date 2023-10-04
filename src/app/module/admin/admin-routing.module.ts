import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-componenet/dashboard/dashboard.component';
import { StudentGuard } from 'src/app/student.guard';
import { AdminGuard } from 'src/app/admin.guard';
import { PostStudentComponent } from './admin-componenet/post-student/post-student.component';
import { AllStudentsComponent } from './admin-componenet/all-students/all-students.component';
import { UpdateStudentComponent } from './admin-componenet/update-student/update-student.component';
import { PayFeeComponent } from './admin-componenet/pay-fee/pay-fee.component';
import { AllLeavesComponent } from './admin-componenet/all-leaves/all-leaves.component';
import { PostTeacherComponent } from './admin-componenet/post-teacher/post-teacher.component';
import { GetAllTeachersComponent } from './admin-componenet/get-all-teachers/get-all-teachers.component';

const routes: Routes = [
  {
    path:"dashboard",
    component:DashboardComponent,
    canActivate:[AdminGuard]
  },
  {
    path:"student",
    component:PostStudentComponent,
    canActivate:[AdminGuard]
  },
  {
    path:"students",
    component:AllStudentsComponent,
    canActivate:[AdminGuard]
  },
  {
    path:"student/:studentId",
    component:UpdateStudentComponent,
    canActivate:[AdminGuard]
  },
  {
    path:"fee/:studentId",
    component:PayFeeComponent,
    canActivate:[AdminGuard]
  },
  {
    path:"leaves",
    component:AllLeavesComponent,
    canActivate:[AdminGuard]
  },
  {
    path:"teacher",
    component:PostTeacherComponent,
    canActivate:[AdminGuard]
  },
  {
    path:"teachers",
    component:GetAllTeachersComponent,
    canActivate:[AdminGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
