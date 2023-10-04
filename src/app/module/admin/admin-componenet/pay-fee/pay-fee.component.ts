import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../admin-service/admin.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pay-fee',
  templateUrl: './pay-fee.component.html',
  styleUrls: ['./pay-fee.component.scss']
})
export class PayFeeComponent implements OnInit {

  studentId:number=this.route.snapshot.params['studentId'];

  validateForm:FormGroup;
  isSpinning:boolean=false;

  Months:string[]=[
    "January","Febuary","March","April","May","June","July","August","September","October","November","December"
  ]

  constructor(private service:AdminService,private route:ActivatedRoute,private fb:FormBuilder,private snak:MatSnackBar) { }

  ngOnInit(): void {
    this.validateForm=this.fb.group({
      amount:[null,Validators.required],
      month:[null,Validators.required],
      givenBy:[null,Validators.required],
      disc:[null,Validators.required]
    })
  }

  payFee(){

    this.service.payFee(this.studentId,this.validateForm.value).subscribe((res)=>{
      console.log(res);
      if(res !=null)
      {
        this.snak.open("Fee Pay Successfully....","Close",{
          duration:5000
        })
      }else{
        this.snak.open("Fee Not Pay!! Please Try Again...","Close",{
          duration:5000
        })
      }
    })
  }
}
