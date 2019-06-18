import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';
import { HttpServiceService } from 'src/services/http-service.service';
import { Forgotpassword } from 'src/app/model/forgotpassword';
import { Router } from '@angular/router';



@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  
  forgotpassword: Forgotpassword =new Forgotpassword();
  

  email=new FormControl(this.forgotpassword.emailId,[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]);
  
  constructor(private snackBar:MatSnackBar,
    private httpService:HttpServiceService,
    private router:Router
    ) { }

  ngOnInit() {
    console.log("ForgotPassword");
    
  }

  emailValidation(){
    return this.email.hasError('required') ? 'You must enter a valid email' :
      this.email.hasError('email') ? 'Not a valid email' :
'';
  }

  onForgotPassword(){
    // console.log("ForgotPass Method Called");
    
    console.log(this.email);
    this.httpService.putRequest("forgotpassword?emailId="+this.forgotpassword.emailId).subscribe(
      (response:any)=>{
        // console.log("In ForgotPassword=====>");
        
        if(response.statusCode===200){
          console.log("ForgotPass Success");
          
          // console.log(response);
          
          this.snackBar.open(response.statusMessage,"close",{duration:2500})
          this.router.navigate(['/resetpassword']);
        }else{
          // console.log("ForgotPass Failed");
          
          // console.log(response);
          
          this.snackBar.open(response.statusMessage,"close",{duration:2500});
        }
      }
    )
    
  }
}
