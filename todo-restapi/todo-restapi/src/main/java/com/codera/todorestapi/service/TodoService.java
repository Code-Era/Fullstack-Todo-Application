package com.codera.todorestapi.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.codera.todorestapi.shared.dto.TodoDto;


public interface TodoService {
	
	List<TodoDto> getAllTodoList(String name);
	public TodoDto deleteByTodoId(long id);
	public TodoDto todofindById(long id);
	public TodoDto saveDto(TodoDto todo );

}
