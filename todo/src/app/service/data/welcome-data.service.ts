import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

class HelloWorldBean {
constructor(public name : String){}

}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http : HttpClient) { }


 excuteHelloService(){
   return  this.http.get<HelloWorldBean>('http://localhost:8080/hello');
   
 }

 excuteHelloServicePathVaribale(name :String){
   let headerBasicAuthuUserPassword =   this.createBasicAuthenticationHttpHeader();

   let headers = new HttpHeaders({
     Authorization : headerBasicAuthuUserPassword
   })
   


  return  this.http.get<String>(`http://localhost:8080/hello-world/${name}`,
  {headers : headers});
  
}


createBasicAuthenticationHttpHeader(){
  let username =  's@gmail.com'
  let password = 'dummy'

  let basicAuthHeaderString = 'Basic ' + window.btoa( username + ':' + password);

  return basicAuthHeaderString;
}

}
