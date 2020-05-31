import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service copy';

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
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService:BasicAuthenticationService ) { }

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

  handBasicAuthlelogin() {

    this.basicAuthenticationService.excuteBasicAuthServicePathVaribale(this.username, this.password).subscribe(
      data => {
        this.invalidLogin = false;  
        console.log(data);
         //redirect to Welcome Page
         this.router.navigate(['welcome', this.username])
      },
      error =>{
        console.log(error.errorMessage);
        this.invalidLogin = true;
    
      }
    )
  

   
  }

}
