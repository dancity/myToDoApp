import React, { useState, useEffect } from "react";
import TodoItem from "../components/TodoItem";

function App() {
  const [todosData, setTodosData] = useState([]);
  const [displayRender, setDisplayRender] = useState([]);
  const [isEmpty, setEmpty] = useState(!!todosData);

  function renderList() {
    for (let x of todosData) {
      if (x.deleted === false) {
        setEmpty(false);
        break;
      }
      setEmpty(true);
    }

    setDisplayRender(
      todosData.map((todo, index) =>
        todo.deleted ? null : (
          <TodoItem
            key={todo.id}
            item={todo}
            index={index}
            deleteFunction={deleteTodo}
            checkFunction={changeTodoCheck}
          />
        )
      )
    );
  }

  function addTodo(event) {
    event.preventDefault();
    todosData.push({
      id: todosData.length,
      text: event.target[0].value,
      completed: false,
      deleted: false,
    });
    setTodosData(todosData);
    setEmpty(false);
    renderList();
    event.target[0].value = "";
  }

  function deleteTodo(todoIndex) {
    todosData[todoIndex].deleted = true;
    setTodosData(todosData);
    renderList();
  }

  function changeTodoCheck(todoIndex) {
    todosData[todoIndex].completed = !todosData[todoIndex].completed;
    setTodosData(todosData);
    renderList();
  }

  return (
    <div>
      <div className="input-box">
        <form onSubmit={addTodo}>
          <input type="text" placeholder="Nova tarefa" />
          <button type="submit" className="myButton">
            Adicionar
          </button>
        </form>
      </div>
      {isEmpty ? (
        <div className="todo-list">
          <p>Não há nenhuma tarefa</p>
        </div>
      ) : (
        <div className="todo-list">{displayRender}</div>
      )}
    </div>
  );
}

export default App;
