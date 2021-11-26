import React, { useState, useContext, useRef, useEffect } from 'react';
import { TodoContext } from './TodoProvider';

export default function TodoAdd() {
  const [todos, setTodos] = useContext(TodoContext);
  const [todoName, setTodoName] = useState('');
  const todoInput = useRef();

  const addTodo = (e) => {
    e.preventDefault();
    console.log(todoName);
    setTodos([...todos, { name: todoName, completed: false }]);
    setTodoName('');
    todoInput.current.focus();
  };

  useEffect(() => {
    todoInput.current.focus();
  }, []);

  return (
    <form autoComplete="off" onSubmit={addTodo}>
      <input
        type="text"
        name="todos"
        id="todos"
        ref={todoInput}
        required
        placeholder="What needs to be done?"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
