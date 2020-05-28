import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(private todoDataService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
   
    this.id = this.route.snapshot.params['id'];
    
     this.todo = new Todo(this.id,'', false, new Date());
    if (this.id != -1) {

      this.todoDataService.retriveTodoService('s@gmail.com', this.id).subscribe(

        data => {
          console.log(data);
          this.todo = data;
        });
    }
  }

  saveTodo() {
    console.log(`inside save called ${this.id}`);
    if (this.id != -1) {
      this.todoDataService.updateTodoService('s@gmail.com', this.id, this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos'])
          // this.todo = data;
        });


    } else {
      console.log(`inside save called ${this.todo.id}`);
      // here we create todo item
      this.todoDataService.createTodoService('s@gmail.com', this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos'])
        
        });
    }


  }



}
