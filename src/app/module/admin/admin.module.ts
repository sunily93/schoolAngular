import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './admin-componenet/dashboard/dashboard.component';
import { PostStudentComponent } from './admin-componenet/post-student/post-student.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { AllStudentsComponent } from './admin-componenet/all-students/all-students.component';
import { UpdateStudentComponent } from './admin-componenet/update-student/update-student.component';
import { PayFeeComponent } from './admin-componenet/pay-fee/pay-fee.component';
import { AllLeavesComponent } from './admin-componenet/all-leaves/all-leaves.component';
import { MatMenuModule } from '@angular/material/menu';
import { PostTeacherComponent } from './admin-componenet/post-teacher/post-teacher.component';
import { GetAllTeachersComponent } from './admin-componenet/get-all-teachers/get-all-teachers.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PostStudentComponent,
    AllStudentsComponent,
    UpdateStudentComponent,
    PayFeeComponent,
    AllLeavesComponent,
    PostTeacherComponent,
    GetAllTeachersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule
  ]
})
export class AdminModule { }
