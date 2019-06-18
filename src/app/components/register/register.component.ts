import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/model/register';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import {  Router } from '@angular/router';
import { HttpServiceService } from 'src/services/http-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register:Register=new Register();

  userName=new FormControl(this.register.userName,[Validators.required,Validators.minLength(8)]);
  phoneNumber=new FormControl(this.register.phoneNumber,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]);
  password=new FormControl(this.register.password,[Validators.minLength(6)]);
  confirmpassword=new FormControl('',[Validators.minLength(6)]);
  email=new FormControl(this.register.email,[Validators.required]);
  

  constructor(private snackBar:MatSnackBar,
    private httpservice:HttpServiceService,
    public FormBuilder:FormBuilder,
    
    private router:Router
    ) { }

  ngOnInit() {
    console.log("asdaafa");
    
  }

  emailValidation(){
    return this.email.hasError('required') ? 'You must enter a valid email' :
      this.email.hasError('email') ? 'Not a valid email' :
'';
  }

  onRegister(){
      if(this.confirmpassword.value===this.password.value){
        console.log("Hello",this.register);
        console.log("Ok");
        this.httpservice.postRequest("register",this.register).subscribe(
          (response:any)=>{
            console.log("in register=====>",response);
            
            if(response.statusCode==200){
              console.log("Registered");
              
              console.log(response);
              this.snackBar.open("Registered Succesfully.Please Verify your email.","undo",{duration:2500});
              this.router.navigate(['/login']);
            } 
            else{
              console.log(response);
              this.snackBar.open("Registeration Failed","undo",{duration:2500});
              console.log("Failed",response);
            }
          }
        )
        }else{
          console.log("Failed11111");
          
          this.snackBar.open("Enter Matching Password","undo",{duration:2500});
          
    }
  } 
}
