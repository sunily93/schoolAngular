import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../student-service/student.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss']
})
export class ApplyLeaveComponent implements OnInit {

  isSpinning=false;
  validateForm:FormGroup
  constructor(private service:StudentService,private router:Router,private snack:MatSnackBar,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.validateForm=this.fb.group({
      subject:[null,Validators.required],
      body:[null,Validators.required]
    })
  }

  applyLeave()
  {
    this.isSpinning=true;
    console.log(this.validateForm.value);
    this.service.applyLeave(this.validateForm.value).subscribe((res)=>{
      console.log(res)
      this.isSpinning=false;
      if(res!=null)
      {
        this.snack.open("Leave apply Suceessfully....","Close",{
          duration:5000
        })
      }else{
        this.snack.open("Leave Not apply..","Close",{
          duration:5000
        })
      }
    })
  }
}
