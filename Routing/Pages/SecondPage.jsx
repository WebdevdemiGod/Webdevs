import { useEffect, useState } from 'react'


function App() {
  const [todo, setTodo] = useState([])
  const [input, setInput] = useState("")
  const [inputerror, setInputerror] = useState(false);
  const inputHandler = (e)=>{
    setInput(e.target.value)
}
  const addButton = (id) =>{

  setTodo((prev)=>[
    ...prev, 
    {id: Math.random().toString(), text: input}
  ]);
    setInput("");
};

  const deleteAll = ()=>{
    setTodo([]);
  }
  const deleteItem = (id)=>{
    setTodo((prev)=>prev.filter((todo)=>todo.id!==id))
  };

  useEffect(()=>{
    setInputerror(!/^[a-zA-Z\s]+$/.test(input));
  }, [input]);

  return (
    <div>
      <h1>TODO LIST</h1>
      <input type="text" onChange={inputHandler} value={input}/>
      <button onClick={addButton} disabled = {inputerror}>ADD</button>
      <button onClick={deleteAll}>DELETE ALL</button>
      <table>
        <thead>
          <th>ASSIGNMENT</th>
          <th>BUTTON</th>
        </thead>
        <tbody>
          {todo.map((item)=>(
            <tr key={item.id}>
              <td>{item.text}</td>
              <td>
                <button onClick={(id)=>deleteItem(item.id)}>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
