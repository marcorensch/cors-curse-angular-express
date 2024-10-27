import {Component} from '@angular/core';
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

interface User {
  name: string;
  email: string;
}

interface LoginResponse {
  user: User;
  msg: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(protected authService: AuthService, private router: Router) {
  }

  handleLoginClicked() {
    // Call the login method from the AuthService
    this.authService.login("username", "password").subscribe((data: LoginResponse) => {
      // Store the User Data in the Local Storage
      if(data.user){
        localStorage.setItem('user', JSON.stringify(data.user));
      }
      console.log(data);
      // Redirect to Home Page
      this.router.navigate(['/']);
    });
  }

  handleLogoutClicked() {
    // Call the logout method from the AuthService
    this.authService.logout().subscribe((data) => {
      console.log(data);

      // Redirect to Home Page
      this.router.navigate(['/']);
    });
  }
}
