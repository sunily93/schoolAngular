import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin-service/admin.service';

@Component({
  selector: 'app-get-all-teachers',
  templateUrl: './get-all-teachers.component.html',
  styleUrls: ['./get-all-teachers.component.scss']
})
export class GetAllTeachersComponent implements OnInit {
  teachers:any=[];
  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.getAllTeachers()
  }

  getAllTeachers()
  {
    this.service.getAllTeachers().subscribe((res)=>{
      console.log(res)
      this.teachers=res;
    })
  }

}
