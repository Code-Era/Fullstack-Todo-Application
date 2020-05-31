import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http : HttpClient) { }


  
createBasicAuthenticationHttpHeader(){
  let username =  's@gmail.com'
  let password = 'dummy'

  let basicAuthHeaderString = 'Basic ' + window.btoa( username + ':' + password);

  return basicAuthHeaderString;
}


  retriveAllTodoService(username){
    
    return  this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
    
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
