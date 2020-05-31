import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
''
message : String = 'Welcome to Welcome Component';
name : String  = '';
welcomeMessagefromService: String = '';

  constructor(private router : ActivatedRoute,
    private sevrice : WelcomeDataService) { }

  ngOnInit(): void {
   // console.log(this.message);
   // console.log( this.router.snapshot.params['name']);
    this.name =  this.router.snapshot.params['name'];
  }

  getWelcomeMessage(){
    console.log(this.sevrice.excuteHelloService());
    this.sevrice.excuteHelloService().subscribe(

      response  => this.handleSuccessfulResponse(response),

      error  => this.handleErrorResponse(error)
    );

    console.log('last line of getWelcomeMessage');

  }

  handleSuccessfulResponse(response){
    console.log(response.name);
    this.welcomeMessagefromService = response;
  }
  handleErrorResponse(error){
    console.log(error.error.message);
    this.welcomeMessagefromService = error.error.message;
  }


  getWelcomeMessageWithPathvariable(){
    this.sevrice.excuteHelloServicePathVaribale(this.name).subscribe(

      response  => {
        
        this.handleSuccessfulResponse(response)
      }
    );

    console.log('last line of getWelcomeMessage');

  }

}
