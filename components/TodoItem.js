import React, { useState } from "react";
import todosData from "../data/todosData";
//import trash from "../images/trash.png";

function TodoItem(props) {
  const [checked, setChecked] = useState(props.item.completed);
  let textStyle = checked
    ? { textDecoration: "line-through", color: "lightgrey" }
    : null;

  const [deleted, setDeleted] = useState(props.item.deleted);

  function onChangeHandler() {
    setChecked(!checked);

    for (let item of todosData) {
      if (item.id == props.item.id) {
        item.completed = !checked;
      }
    }
  }

  function onClickHandler() {
    setDeleted(!deleted);
    for (let item of todosData) {
      if (item.id == props.item.id) {
        item.deleted = !deleted;
      }
    }
  }

  return props.item.deleted ? null : (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChangeHandler()}
      />
      <p style={textStyle}>{props.item.text}</p>
      <div className="trash-icon" onClick={() => onClickHandler()}>
        <img src="/img/trash.png"></img>
      </div>
    </div>
  );
}

export default TodoItem;
