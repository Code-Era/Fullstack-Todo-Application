package com.codera.todorestapi.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.function.Predicate;
import java.util.logging.Logger;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.codera.todorestapi.shared.dto.TodoDto;

@Service
public class TodoServiceImp implements TodoService {

	private static List<TodoDto> todos = new ArrayList();
	private static long idCounter = 0;

	static {
		todos.add(new TodoDto(++idCounter, "s@gmail.com", "Learn to Dance 2", new Date(), false));
		todos.add(new TodoDto(++idCounter, "s@gmail.com", "Learn about Microservices ", new Date(), false));
		todos.add(new TodoDto(++idCounter, "s@gmail.com", "Learn about Angular", new Date(), false));
		}

	public List<TodoDto> findAll() {
		return todos;
	}

	@Override
	public List<TodoDto> getAllTodoList(String name) {
		return todos;
//		return findAll().stream()
//				.filter(todo -> todo.getUsername().equals(name))
//				.collect(Collectors.toList());
	}

	@Override
	public TodoDto deleteByTodoId(long id) {
		TodoDto deletedItem = todos.stream().filter(todo -> todo.getId() == id).findAny().get();

		if (deletedItem == null)
			return null;

		todos.remove(deletedItem);
		Logger.getLogger("Inside Delete item =>  " + deletedItem);

		return deletedItem;
	}

	@Override
	public TodoDto todofindById(long id) {
		return todos.stream().filter(todo -> todo.getId() == id).findAny().get();
	}

	@Override
	public TodoDto saveDto(TodoDto todo) {
		if (todo.getId() == -1) {
			todo.setId(++idCounter);
			todos.add(todo);
		} else {
			deleteByTodoId(todo.getId());
			todos.add(todo);
		}
		return todo ;
	}

	

}
