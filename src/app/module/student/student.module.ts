import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { StudentRoutingModule } from './student-routing.module';
import { DashboardComponent } from './student-componenet/dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSelectModule } from '@angular/material/select';
import { ApplyLeaveComponent } from './student-componenet/apply-leave/apply-leave.component';
import { GetAllLeaveComponent } from './student-componenet/get-all-leave/get-all-leave.component';
import { UpdateStudentComponent } from './student-componenet/update-student/update-student.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ApplyLeaveComponent,
    GetAllLeaveComponent,
    UpdateStudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ]
})
export class StudentModule { }
