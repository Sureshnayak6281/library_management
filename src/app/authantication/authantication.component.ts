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
    // otp: new FormControl(''),
  });
  data: any;
  // showOTPField:boolean = false;

  constructor(private _snackBar: MatSnackBar, private log: LoginService, private router: Router) {}

  submitform() {
    const email: any = this.loginform.value.Email;
    const password: any = this.loginform.value.password;
    const phone:any = this.loginform.value.phone;
    const payload = {
      email: email,
      password: password,
      phone: phone,
    };
    this.log.login(payload.email, payload.password,payload.phone).subscribe((response) => {
      if (response.status === 'error') {
        this._snackBar.open('invalid password or email', 'close', {
          duration: 1000,
        });
      } else {
        this.openSnackBar();
        this.loginform.reset();
        // this.showOTPField = true
        this.router.navigate(['/authur']);
        
      }
    });
  }
  openSnackBar() {
    this._snackBar.open('login successfull', 'close', {
      duration: 3000,
    });
  }
}

