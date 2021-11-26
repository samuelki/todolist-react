import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from './TodoProvider';

export default function TodoList() {
  const [todos, setTodos] = useContext(TodoContext);

  const toggleCompleted = (id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.completed = !todo.completed;
      }
    });
    setTodos(newTodos);
  };

  const handleEditTodos = (editValue, id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.name = editValue;
      }
    });
    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          key={index}
          id={index}
          checkCompleted={toggleCompleted}
          handleEditTodos={handleEditTodos}
        />
      ))}
    </ul>
  );
}
