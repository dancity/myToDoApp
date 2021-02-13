import React, { useState } from "react";
import TodoItem from "../components/TodoItem";
import todosData from "../data/todosData";

function App() {
  const [display, setDisplay] = useState(
    todosData.map((item) => <TodoItem key={item.id} item={item} />)
  );
  const [newTodo, setNewTodo] = useState("");

  function clickHandler() {
    todosData.push({
      id: display.length,
      text: newTodo,
      completed: false,
    });
    setDisplay(todosData.map((item) => <TodoItem key={item.id} item={item} />));
    setNewTodo("");
  }

  return (
    <div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Nova tarefa"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              clickHandler();
            }
          }}
        />
        <button className="myButton" onClick={clickHandler}>
          Adicionar
        </button>
      </div>
      <div className="todo-list">{display}</div>
    </div>
  );
}

export default App;
