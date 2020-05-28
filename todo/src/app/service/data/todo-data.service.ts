import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http : HttpClient) { }

  retriveAllTodoService(username){
    
    return  this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
    
  }


  deleteTodo(username, id){
    console.log(`id => ${id}`);
    return  this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
    
  }

  retriveTodoService(username, id){
    
    return  this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
    
  }


  updateTodoService(username, id, todo){
    
    return  this.http.put<Todo>(`http://localhost:8080/users/${username}/todos/${id}`, todo);
    
  }

  createTodoService(username,  todo){
    
    return  this.http.post(`http://localhost:8080/users/${username}/todos`, todo);
    
  }




}
