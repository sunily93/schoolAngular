import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin-service/admin.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {

  Class:string[]=[
    "Play","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th"
  ]
  GENDER:string[]=[
    "Male","Female","Not Specified"
  ]
  studentId:number=this.activeRoute.snapshot.params['studentId'];
  validateForm:FormGroup

  isSpinning:boolean;
  constructor(private service:AdminService,private activeRoute:ActivatedRoute,private fb:FormBuilder,private snak:MatSnackBar) { }

  ngOnInit(): void {
    this.validateForm=this.fb.group({
      email:['',Validators.required],
      name:['',Validators.required],
      fatherName:['',Validators.required],
      motherName:['',Validators.required],
      address:['',Validators.required],
      studentClass:['',Validators.required],
      dob:['',Validators.required],
      gander:['',Validators.required],
    })
    this.getStudentById();
  }

  getStudentById()
  {
    this.service.getStudentById(this.studentId).subscribe((res)=>{
      const student=res.studentDto;
      this.validateForm.patchValue(student);
      console.log(res)
    })
  }

  updateStudent()
  {
    this.service.updateStudentById(this.studentId,this.validateForm.value).subscribe((res)=>{
      console.log(res)
      if(res !=null)
      {
        this.snak.open("Student Updated Successfully.....","Close",{
          duration:5000
        })
      }else{
        this.snak.open("Student not found.....","Close",{
          duration:5000
        })
      }
    })
  }

}
