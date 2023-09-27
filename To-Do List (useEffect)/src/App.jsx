import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState(false);

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const addTodoHandler = (id) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: input }
    ]);
    setInput("");
  };

  const deleteToHandler = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

  const deleteAllHandler = () => {
    setTodos([]);
  };

  useEffect(() => {
    setInputError(!/^[a-zA-Z\s]+$/.test(input));
  }, [input]);

  return (
    <div className="toDoBox">
      <h1>TO-DO LIST</h1>
      
      <input onChange={inputHandler} value={input} />
      <p
        style={{
          color: inputError ? 'red': 'green'
        }}
      >{inputError && input.trim() !== "" ? "No Special Characters and Numbers" : ""}</p>
      <div className='btns'>
        <button id="addButton" onClick={addTodoHandler} onSubmit={addTodoHandler} disabled={inputError}>
        ADD
        </button>
        <button onClick={deleteAllHandler}>DELETE ALL</button>
      </div>
      
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button className="deletebtn" onClick={() => deleteToHandler(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;