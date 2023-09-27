import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
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
    <div className='content'>
      <h1>TO-DO LIST</h1>
      <div className='Buttons'>
        <TodoForm input={input} inputHandler={inputHandler} addTodoHandler={addTodoHandler} /> 
        <button onClick={deleteAllHandler}>Delete All</button>
      </div>
      <br /> <br />
      <TodoList todos={todos} deleteTodoHandler={deleteTodoHandler} />
    </div>
  );
}

export default App;