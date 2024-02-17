import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthurService } from 'src/app/authur.service';
// import { AuthurService } from '../authur.service';

@Component({
  selector: 'app-createupdateauthur',
  templateUrl: './createupdateauthur.component.html',
  styleUrls: ['./createupdateauthur.component.css'],
})
export class CreateupdateauthurComponent {
  constructor(private authur: AuthurService) {}
  editform = new FormGroup({
    Authur_name: new FormControl(''),
    User_name: new FormControl(''),
    Email: new FormControl(''),
  });

  submitcreateauthur() {
    const authur_name: any = this.editform.value.Authur_name;
    const user_name: any = this.editform.value.User_name;
    const email: any = this.editform.value.Email;

    const payload = {
      authur_name: authur_name,
      user_name: user_name,
      email: email,
    };

    console.log(payload);

    this.authur
      .createauthur(payload.authur_name, payload.user_name, payload.email)
      .subscribe(
        (response: any) => {},

        (error: any) => {
          console.error(error);
        }
      );
  }
}
