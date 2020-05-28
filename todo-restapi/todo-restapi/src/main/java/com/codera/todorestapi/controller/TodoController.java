package com.codera.todorestapi.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.codera.todorestapi.service.TodoService;
import com.codera.todorestapi.shared.dto.TodoDto;


@CrossOrigin(origins ="http://localhost:4200")
@RestController
public class TodoController {
	
	@Autowired
	private TodoService todoService;
	
	@GetMapping("/users/{name}/todos")
	public List<TodoDto> getAllTodosList(@PathVariable String name ){
		return todoService.getAllTodoList(name);
		
	}
	
	
	@GetMapping("/users/{name}/todos/{id}")
	public TodoDto getTodo(@PathVariable String name , @PathVariable long id){
		return todoService.todofindById(id);
		
	}
	
	@PostMapping("/users/{name}/todos")
	public ResponseEntity<Void>  saveTodosObject(@PathVariable String name,
			@RequestBody TodoDto todo){
		
		TodoDto savedDto =  todoService.saveDto(todo);	
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
		.path("/{id}").buildAndExpand(savedDto.getId()).toUri();
		
		return  ResponseEntity.created(uri).build();
		
	}
	
	
	
	@PutMapping("/users/{name}/todos/{id}")
	public ResponseEntity<TodoDto> updateTodosObject(@PathVariable String name ,
			@PathVariable long id,
			@RequestBody TodoDto todo){
		
		TodoDto savedDto =  todoService.saveDto(todo);	
		return new ResponseEntity<TodoDto>(savedDto, HttpStatus.OK);
	}
	
	
	
	@DeleteMapping("/users/{name}/todos/{id}")
	public ResponseEntity<Void> deleteTodosList(@PathVariable String name, @PathVariable long id ){
		
		TodoDto dto = todoService.deleteByTodoId(id);
		if(dto != null) {
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.notFound().build();
		
	}

}
