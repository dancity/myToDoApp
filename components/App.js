import React, { useState } from "react";
import TodoItem from "../components/TodoItem";
import todosData from "../data/todosData";

function App() {
  const [display, setDisplay] = useState(
    todosData.map((item) => <TodoItem key={item.id} item={item} />)
  );

  function submitHandler(event) {
    event.preventDefault();
    todosData.push({
      id: display.length,
      text: event.target[0].value,
      completed: false,
      deleted: false,
    });
    setDisplay(todosData.map((item) => <TodoItem key={item.id} item={item} />));
    event.target[0].value = "";
  }

  return (
    <div>
      <div className="input-box">
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Nova tarefa" />
          <button type="submit" className="myButton">
            Adicionar
          </button>
        </form>
      </div>
      <div className="todo-list">{display}</div>
    </div>
  );
}

export default App;
