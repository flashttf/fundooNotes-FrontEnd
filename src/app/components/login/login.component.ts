import { Component, OnInit } from '@angular/core';
import { Login } from '../../model/login';
import { MatSnackBar } from '@angular/material';
import { HttpServiceService } from '../../../services/http-service.service';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  login: Login = new Login();
  token: string;
  email = new FormControl(this.login.email, [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]);
  password = new FormControl(this.login.password, [Validators.required, Validators.minLength(6)]);


  constructor(private snackBar: MatSnackBar,
    private httpservice: HttpServiceService,
    public FormBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {

    this.token = this.route.snapshot.paramMap.get('token');

  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid Email' :
        '';
  }
  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'You must enter a value' :
      this.password.hasError('password') ? 'Not a valid Password' : '';
  }

  onLogin() {
    console.log("Login");
    // console.log(this.login);
    // this.token = localStorage.getItem('token');
    this.httpservice.postRequest("login", this.login).subscribe(
      (response: any) => {
        if (response.statusCode === 202) {
          this.snackBar.open(response.statusMessage, "close", { duration: 3000 });
        } else if (response.statusCode === 203) {
          this.snackBar.open(response.statusMessage, "close", { duration: 3000 });
        }
        else if (response.statusCode === 200) {
          // console.log(response);
          localStorage.setItem('token', response.token);
          localStorage.setItem('email', this.login.email);
          localStorage.setItem('userName', response.userName);
          this.snackBar.open(response.statusMessage, "close", { duration: 2500 })
          this.router.navigate(['/dashboard']);

        } else {
          console.log(response);
          this.snackBar.open("Login Failed.Check password again", "close", { duration: 2500 })
        }
      }
    )
  }

  onRegister() {
    this.router.navigate(['/register']);
  }

  onForgotPassword() {
    this.router.navigate(['/forgotpassword']);
  }

}
