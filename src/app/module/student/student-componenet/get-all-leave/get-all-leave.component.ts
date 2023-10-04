import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student-service/student.service';

@Component({
  selector: 'app-get-all-leave',
  templateUrl: './get-all-leave.component.html',
  styleUrls: ['./get-all-leave.component.scss']
})
export class GetAllLeaveComponent implements OnInit {

  isSpinning=false;
  leaves:any;
  constructor(private service:StudentService) { }

  ngOnInit(): void {
    this.getAllLeaves();
  }

  getAllLeaves()
  {
    this.isSpinning=true;
    this.service.getAllApplyLeaveStudentById().subscribe((res)=>{
      console.log(res)
      this.isSpinning=false;
      this.leaves=res;
    })
  }

}
