import { Component, OnInit } from '@angular/core';
import { Login } from '../../model/login';
import { MatSnackBar } from '@angular/material';
import { HttpServiceService } from '../../../services/http-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  token: string;
    login:Login=new Login();     
    
    constructor(private snackBar: MatSnackBar,
      private httpservice: HttpServiceService,
     
     ) { }

  ngOnInit() {
    // console.log("defersf");
    console.log("wsguytfugty");
    
  }

  onLogin() {
    console.log("Login");
    console.log(this.login);
    this.token = localStorage.getItem('token');
    this.httpservice.postRequest("login", this.login).subscribe(
      (response: any) => {
        if (response.statusCode === 204) {
          console.log(response);
          localStorage.setItem('token', response.token);
          localStorage.setItem('email', this.login.email);
          localStorage.setItem('userName' , response.userName);
          this.snackBar.open(response.statusMessage, "close", { duration: 2500 })
        //  this.router.navigate(['/dashboard']);
          
        } else {
          console.log(response);
          this.snackBar.open("abcd", "close", { duration: 2500 })
        }
      }
    )
  }

}
