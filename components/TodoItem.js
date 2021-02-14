import React, { useState } from "react";
import todosData from "../data/todosData";
//import trash from "../images/trash.png";

function TodoItem(props) {
  let textStyle = props.item.completed
    ? { textDecoration: "line-through", color: "lightgrey" }
    : null;

  return (
    <div className="todo-item">
      <input
        id={props.item.id}
        name={props.item.id}
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.checkFunction(props.index)}
      />
      <label for={props.item.id} style={textStyle}>
        {props.item.text}
      </label>
      <div
        className="trash-icon"
        onClick={() => props.deleteFunction(props.index)}
      >
        <img src="/img/trash.png"></img>
      </div>
    </div>
  );
}

export default TodoItem;
