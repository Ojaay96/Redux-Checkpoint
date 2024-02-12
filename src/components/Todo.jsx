import React from "react";
import "./Todo.css";

const Todo = ({ description }) => {
  return (
    <div className="tasks-list">
      <p className="tasks-item">{description}</p>
      <button className="remove-button">Remove</button>
    </div>
  );
};

export default Todo;
