import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../admin-service/admin.service';

@Component({
  selector: 'app-post-student',
  templateUrl: './post-student.component.html',
  styleUrls: ['./post-student.component.scss']
})
export class PostStudentComponent implements OnInit {

  Class:string[]=[
    "Play","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th"
  ]
  GENDER:string[]=[
    "Male","Female","Not Specified"
  ]
  isSpinning:boolean
  validateForm:FormGroup
  constructor(private service:AdminService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.validateForm=this.fb.group({
      email:['',Validators.required],
      name:['',Validators.required],
      password:['',Validators.required],
      checkPassword:['',Validators.required,this.confurmationValidator],
      fatherName:['',Validators.required],
      motherName:['',Validators.required],
      address:['',Validators.required],
      studentClass:['',Validators.required],
      dob:['',Validators.required],
      gander:['',Validators.required],
    })
  }

  postStudent()
  {
    console.log(this.validateForm.value);
    this.isSpinning=true;
    this.service.addStudent(this.validateForm.value).subscribe((res)=>{
      console.log(res);
    })
  }

  confurmationValidator=(control:FormControl):{[s:string]:boolean}=>
  {
    if(!control.value)
    {
      return {required:true};
    }else if(control.value!==this.validateForm.controls["password"].value)
    {
      return {confirm:true,error:true};
    }
    return {};
  }

}
