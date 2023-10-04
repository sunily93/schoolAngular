import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup | undefined
  constructor(
    private service:AuthService ,
    private fb:FormBuilder,
    private route:Router,
    private snackeBar:MatSnackBar
    ) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
    this.service.login(
      this.loginForm.get(['email'])!.value,
      this.loginForm.get(['password'])!.value
    ).subscribe((data) => {
      console.log(data);
      if(StorageService.isAdminLoggedIn())
      {
        this.route.navigateByUrl("admin/dashboard");
      }else if(StorageService.isStudentLoggedIn()){alert("2222")
        this.route.navigateByUrl("student/dashboard");
      }

    }),
      (    error: { status: number; })=>{
      if(error.status==406)
      {
        this.snackeBar.open("User is not active","Close",{
          duration:5000
        })
      }else{
        this.snackeBar.open("Bad Credentials","Close",{
          duration:5000
        })
      }
    }
  }

}
