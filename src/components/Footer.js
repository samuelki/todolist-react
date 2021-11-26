import React, { useContext, useState } from 'react';
import { TodoContext } from './TodoProvider';

export default function Footer() {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(TodoContext);

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.completed = !checkAll;
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

  const newTodosCompleted = () => {
    return todos.filter((todo) => todo.completed === false);
  };

  const deleteTodo = () => {
    setTodos(newTodosCompleted());
    setCheckAll(false);
  };

  return (
    <div>
      {todos.length === 0 ? (
        <h2>~*!NOTHING TO DO!*~</h2>
      ) : (
        <div className="row">
          <label htmlFor="all">
            <input
              type="checkbox"
              name="all"
              id="all"
              onChange={handleCheckAll}
              checked={checkAll}
            />
            ALL
          </label>
          <p>
            You have {newTodosCompleted().length}{' '}
            {newTodosCompleted().length === 1 ? (
              <span>thing</span>
            ) : (
              <span>things</span>
            )}{' '}
            to do
          </p>
          <button id="delete" onClick={deleteTodo}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
