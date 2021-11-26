import React, { useState, useEffect, createContext } from 'react';

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todoStore = JSON.parse(localStorage.getItem('todoStore'));
    if (todoStore) setTodos(todoStore);
  }, []);

  useEffect(() => {
    localStorage.setItem('todoStore', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
};
