import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../admin-service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-teacher',
  templateUrl: './post-teacher.component.html',
  styleUrls: ['./post-teacher.component.scss']
})
export class PostTeacherComponent implements OnInit {

  validateForm:FormGroup
  isSpinning:boolean=false;
  Gender:string[]=[
    "Male","Female","Other"
  ]
  constructor(private service:AdminService,private fb:FormBuilder,private snak:MatSnackBar) { }

  ngOnInit(): void {
    this.validateForm=this.fb.group({
      name:[null,Validators.required],
      gender:[null,Validators.required],
      dept:[null,Validators.required],
      qulification:[null,Validators.required],
      dob:[null,Validators.required],
      address:[null,Validators.required]
    })
  }

  postTeacher(){
    console.log(this.validateForm.value);
    this.service.postTeacher(this.validateForm.value).subscribe((res)=>{
      console.log(res)
      if(res!=null)
      {
        this.snak.open("Teacher Save Successfully","Close",{
          duration:5000
        })
      }else{
        this.snak.open("Teacher not save successfully","Close",{
          duration:5000
        })
      }
    })
  }

}
