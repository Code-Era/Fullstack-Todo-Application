import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service copy';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private  basicAuthenticationService: BasicAuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // let username = 's@gmail.com'
    // let password = 'dummy'

    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
let basicAuthHeader = this.basicAuthenticationService.getAuthenticatedToken();
let username = this.basicAuthenticationService.getAuthenticatedUser();

if(basicAuthHeader && username)
   req = req.clone({
     setHeaders : {
       Authorization : basicAuthHeader
     }
   })
   return next.handle(req);
  }

}
