import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
''
message : String = 'Welcome to Welcome Component';
name : String  = '';

  constructor(private router : ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.message);
    console.log( this.router.snapshot.params['name']);
    this.name =  this.router.snapshot.params['name'];
  }

}
