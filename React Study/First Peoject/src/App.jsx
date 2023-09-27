import React, { useState } from 'react';
import Buttons from './components/Buttons';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const addTodoHandler = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: input }
    ]);
    setInput("");
  };

  const deleteTodoHandler = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

  const deleteAllHandler = () => {
    setTodos([]);
  };

  return (
    <div>
      <h1>TO-DO LIST</h1> <br />
      <div className='Buttons'>
        <button onClick={addTodoHandler}>ADD</button>
        <button onClick={deleteAllHandler}>Delete All</button> {/* Add the 'Delete All' button */}

      </div>
     
      <br /> <br />
      <input onChange={inputHandler} value={input} />
      <Buttons />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodoHandler(todo.id)}>
              Delete
            </button> {/* Add the 'Delete' button */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
