import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "s@gmail.com";
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false




  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handlelogin() {

    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      //redirect to Welcome Page
      this.router.navigate(['welcome', this.username])
      
    } else {
      this.invalidLogin = true;
    }

    console.log(this.username);
  }

}
