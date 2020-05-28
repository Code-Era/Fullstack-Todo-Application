import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

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
  return  this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-varibale/${name}`);
  
}

}
