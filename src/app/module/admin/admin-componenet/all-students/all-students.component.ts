import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin-service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss']
})
export class AllStudentsComponent implements OnInit {

  constructor(private service:AdminService,private snak:MatSnackBar) { }

  students:any;

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents()
  {
    this.service.getAllStudents().subscribe((res)=>{
      console.log(res)
      this.students=res;
    })
  }

  deleteStudent(id:number)
  {
    this.service.deleteStudent(id).subscribe((res)=>{
      this.getAllStudents();
      this.snak.open("Student deleted successfully..","Close",{
        duration:5000
      })
    })
  }

}
