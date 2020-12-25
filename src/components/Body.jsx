import React, { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";

const Body = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: Math.random().toString(32).substring(2),
        body: text,
        check: false,
      },
    ]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const putTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.check = !todo.check;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("myTodos")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="task-body">
      <div className="container">
        <Form addTodo={addTodo} />
        <List deleteTodo={deleteTodo} putTodo={putTodo} todos={todos} />
      </div>
    </div>
  );
};

export default Body;
