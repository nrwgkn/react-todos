import React from "react";

const List = ({ deleteTodo, putTodo, todos }) => {
  const handleDeleteClick = (id) => {
    deleteTodo(id);
  };

  const handlePutClick = (id) => {
    putTodo(id);
  };

  return (
    <ul className="task-list">
      {todos.map((todo) => {
        return (
          <li className="task-item" key={todo.id}>
            <p className="task-text">{todo.body}</p>
            <button
              className="btn task-btn put"
              // onClick={() => handlePutClick(todo.id)}
            >
              put<i className="far fa-check-circle"></i>
            </button>
            <button
              className="btn task-btn delete"
              onClick={() => handleDeleteClick(todo.id)}
            >
              delete<i className="fas fa-trash"></i>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
