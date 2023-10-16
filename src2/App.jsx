import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
const [todo, setTodo] = useState([]);
const [input, setInput] = useState("");
const [inputError, setInputError] = useState(false);




const inputhandler = (e) =>{
  setInput(e.target.value);
};

const addToHandler = (id) =>{
  setTodo((prev)=>[
    ...prev, {id: Math.random().toString(), text: input}
  ]);
  setInput("");
};

const deleteHandler = (id) =>{
  setTodo((prev)=>
    prev.filter((todo)=> todo.id!== id)
  )
};

const deleteAllHandler = () =>{
  setTodo([]);
};

useEffect(()=>{
  setInputError(!/^[a-zA-Z\s]+$/.test(input));
}, [input]);

  return (
    <div className="toDoBox">
      <header>
        <h1>TO DO LIST</h1>
      </header>

      <div className="inputArea">
        <input type="text" onChange={inputhandler} value={input}/>
        <p style={{color:"red"}}>
        {inputError && input.trim() !== "" ? "No Special Characters and Numbers" : ""}
        </p>
        </div>
        <div className='btns'>
          <button onClick={addToHandler} disabled={inputError}>ADD</button>
          <button onClick={deleteAllHandler}>DELETE ALL</button>
        </div>
      <div className="Display">
        <table className='table'>
          <thead>
            <th>ASSIGNMENT</th>
            <th>BUTTON</th>

          </thead>
          <tbody>
            {todo.map((item)=>(
              <tr key={item.id}>
                <td>{item.text}</td> 
                <td>
                  <button onClick={()=>deleteHandler(item.id)} >DELETE</button>  
                </td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


