import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.email && this.password) {
      localStorage.setItem('user', this.email);
      alert('Login Successful');
      this.router.navigate(['/home']);
    } else {
      alert('Please enter email and password');
    }
  }

  googleLogin() {
    alert('Google Login (UI only)');
  }
}
