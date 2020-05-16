import { Component, OnInit } from '@angular/core';

export class Todo{

  constructor(
    public id : number,
    public description : string,
    public done : Boolean,
    public targetDate : Date
  ){


  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'learning', false , new Date()),
    new Todo(2, 'Searchning', false , new Date()),
    new Todo(3, 'Angular Expert', false , new Date()),
    new Todo(4, 'Researching', false , new Date()),
    new Todo(5, 'Java Expert', false , new Date())
  ]

  // todo = {
  //   id : 1,
  //   description : 'learning'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
