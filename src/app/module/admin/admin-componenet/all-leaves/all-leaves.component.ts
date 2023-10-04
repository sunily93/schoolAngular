import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin-service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-leaves',
  templateUrl: './all-leaves.component.html',
  styleUrls: ['./all-leaves.component.scss']
})
export class AllLeavesComponent implements OnInit {

  isSpinning=false;
  leave:any;
  constructor(private  servvice:AdminService,private snck:MatSnackBar) { }

  ngOnInit(): void {
    this.getAllLeaves();
  }

  getAllLeaves()
  {
    this.isSpinning=true;
    this.servvice.getAllApplyLeave().subscribe((res)=>{
      console.log(res);
      this.isSpinning=false;
      this.leave=res;
    })
  }

  changeLeaveStatus(leaveId:number,status:string)
  {
    this.isSpinning=true;
    this.servvice.changeLeaveStatus(leaveId,status).subscribe((res)=>{
      console.log(res);
      this.isSpinning=false;
      if(res.id!=null)
      {
        this.snck.open("Leave Approved successfully....","Close",{
          duration:5000
        })
        this.getAllLeaves();
      }else{
        this.snck.open("Something went wrong","ERROR",{
          duration:5000
        })
      }
    })
  }

}
