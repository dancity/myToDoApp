import React, { useState } from "react";

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
        onChange={() => props.checkFunction(props.item.id)}
      />
      <label htmlFor={props.item.id} style={textStyle}>
        {props.item.text}
      </label>
      <div
        className="trash-icon"
        onClick={() => props.deleteFunction(props.item.id)}
      >
        <img src="/img/trash.png"></img>
      </div>
    </div>
  );
}

export default TodoItem;
