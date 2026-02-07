import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.less',
})
export class Login {
hidePassword = true;

  loginData = {
    email: '',
    password: ''
  };

  onSubmit(form: any) {
    if (form.invalid) {
      return;
    }

    console.log('Login Data:', this.loginData);
    // TODO: call login API
  }
}
