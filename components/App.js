import React, { useState, useEffect } from "react";
import TodoItem from "../components/TodoItem";

function App() {
  const [todosData, setTodosData] = useState([]);
  const [listIsEmpty, setListIsEmpty] = useState();

  useEffect(() => {
    const localItems = localStorage.getItem("list");

    if (localItems) {
      setTodosData(JSON.parse(localItems));
    }

    checkIfEmpty();
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todosData));
    checkIfEmpty();
  }, [todosData]);

  function checkIfEmpty() {
    for (let item of todosData) {
      if (item.deleted === false) {
        setListIsEmpty(false);
        break;
      }
      setListIsEmpty(true);
    }
  }

  function addTodo(event) {
    event.preventDefault();
    setTodosData([
      ...todosData,
      {
        id: todosData.length,
        text: event.target[0].value,
        completed: false,
        deleted: false,
      },
    ]);
    event.target[0].value = "";
  }

  function deleteTodo(todoID) {
    setTodosData(
      todosData.map((item) => {
        if (item.id === todoID) {
          return {
            ...item,
            deleted: true,
          };
        }
        return item;
      })
    );
  }

  function changeTodoCheck(todoID) {
    setTodosData(
      todosData.map((item) => {
        if (item.id === todoID) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
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

      <div className="todo-list">
        <p>{listIsEmpty && "Ainda não há uma tarefa"}</p>
        {todosData.map((todo, index) =>
          todo.deleted ? null : (
            <TodoItem
              key={todo.id}
              item={todo}
              index={index}
              deleteFunction={deleteTodo}
              checkFunction={changeTodoCheck}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
