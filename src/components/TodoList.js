import React from 'react';
import Todo from './Todo';

const Todolist = ({todos, setTodos}) => {
    console.log(todos)
    return (
        <div>
    <div className="todo-container">
      <ul className="todo-list">
          {todos.map(todo => (
              <Todo text={todo.text} key={todo.id} setTodos={setTodos} todos={todos} todo={todo}></Todo>
          ))}
      </ul>
    </div>
        </div>
    );
};

export default Todolist;