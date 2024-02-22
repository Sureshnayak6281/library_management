import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authantication',
  templateUrl: './authantication.component.html',
  styleUrls: ['./authantication.component.css'],
})
export class AuthanticationComponent {
  loginform = new FormGroup({
    phone: new FormControl(''),
    Email: new FormControl(''),
    password: new FormControl(''),
   
  });

  otpform = new FormGroup({
    otp: new FormControl(''),
  });

  data: any;
  isOTP:boolean = false
 
  constructor(private _snackBar: MatSnackBar, private log: LoginService, private router: Router) {}

  submitform() {
    // const email: any = this.loginform.value.Email;
    // const password: any = this.loginform.value.password;
    const phone:any = this.loginform.value.phone;
    const payload = {
      // email: email,
      // password: password,
      phone: phone,
    };
    this.log.login(payload.phone).subscribe((response) => {
      
      if (response.status === '422') {
        this._snackBar.open('invalid phone', 'close', {
          duration: 1000,
        });
      } else {
        this.openSnackBar();
        this.loginform.reset();
        this.isOTP=true
        
      }
    });
  }

  submitotp(){
    const otp: any = this.otpform.value.otp;
    const payload = {
      otp: otp,
    };
    this.log.verifyotp(payload.otp).subscribe((response) => {
      if (response.status === '404') {
        this._snackBar.open('invalid otp', 'close', {
          duration: 1000,
        });
      } else {
        this.openSnackBar();
        this.otpform.reset();
        this.router.navigate(['/authur']);
        
      }
    });

    

    }

  

  openSnackBar() {
    this._snackBar.open('verify otp', 'close', {
      duration: 3000,
    });
  }
}



