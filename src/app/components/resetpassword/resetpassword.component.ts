import { Component, OnInit } from '@angular/core';
import { Resetpassword } from 'src/app/model/resetpassword';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/services/http-service.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  reset: Resetpassword = new Resetpassword();
  token: string;
  userPassword = new FormControl(this.reset.userPassword, [Validators.minLength(6)]);
  confirmpassword = new FormControl('', [Validators.minLength(6)]);

  constructor(private snackBar: MatSnackBar,
    private httpService: HttpServiceService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
  }


  onReset() {
    // console.log("Reset-Password method called");

    if (this.confirmpassword.value === this.userPassword.value) {
      // console.log("entering if=true stmnt");

      this.httpService.putRequestforget("users/resetpassword/" + this.token, this.reset).subscribe(
        (response: any) => {
          // console.log("enter response loop");
          // console.log(response);


          if (response.statusCode == 200) {
            // console.log("Reset Password Success");
            // console.log(this.reset);

            this.snackBar.open(response.statusMessage, "close", { duration: 3000 })
            this.router.navigate(['/login']);
          }
          else {
            // console.log("Password-reset failed block");
            this.snackBar.open(response.statusMessage, "close", { duration: 2500 });
          }
        }
      )


    }
    else {
      // console.log("Password not matching block");
      this.snackBar.open("Please Enter Matching passwords", "close", { duration: 2500 });
    }
  }
}
