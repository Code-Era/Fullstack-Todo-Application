import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{

  constructor(
    public id : number,
    public description : string,
    public done : Boolean,
    public targetDate : Date
  ){}
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];

  message : String



  constructor(private todoDataService : TodoDataService,
    private router : Router) { }

  ngOnInit(): void {
     this.todoDataService.retriveAllTodoService('s@gmail.com').subscribe(

      response => {
        console.log(response);
        this.todos = response;
      }


    );

  }

  
  deleteTodo(id){
    console.log(`delete todo Id=>  ${id}`);
    this.todoDataService.deleteTodo('s@gmail.com', id).subscribe(

      response => {
        console.log(response);
        this.message = `Deleted Successful ${id}`;
        
      } );
  }

  updateTodo(id){
    console.log(`Update todo Id=>  ${id}`);
    this.router.navigate(['todos',id]);
    
  }

  addTodo(){
    this.router.navigate(['todos', -1]);
  }


}
