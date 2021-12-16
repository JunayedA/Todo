import React from 'react';
import Todo from './Todo';

const Todolist = ({todos}) => {
    console.log(todos)
    return (
        <div>
    <div className="todo-container">
      <ul className="todo-list">
          {todos.map(todo => (
              <Todo text={todo.text} key={todo.id}></Todo>
          ))}
      </ul>
    </div>
        </div>
    );
};

export default Todolist;