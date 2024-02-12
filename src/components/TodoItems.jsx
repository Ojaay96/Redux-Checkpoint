import React from "react";
import Todo from "./Todo";
import "./TodoItems.css";
import { useSelector } from "react-redux";

const TodoItems = () => {
  const { todos } = useSelector((state) => state.todos);
  return (
    <div className="tasks-container">
      {todos.map((todoitem) => {
        return <Todo key={todoitem.id} description={todoitem.description} />;
      })}
    </div>
  );
};

export default TodoItems;
