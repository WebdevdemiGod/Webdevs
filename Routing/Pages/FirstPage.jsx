import { useState } from 'react'


export default function App() {
  const [input, setInput] = useState("");

  const students = [
    {Name: "Xander Jacob Labide", Age: 20, Course: "BSIT", Year: 2},
    {Name: "Maria Michaela Dionson", Age: 20, Course: "BSIT", Year: 2},
    {Name: "Achille Lorenzo Lanutan", Age: 20, Course: "BSIT", Year: 2},
    {Name: "Jan Carlo Juab", Age: 20, Course: "BSIT", Year: 2},
    {Name: "Julz Kaupper Cortes", Age: 20, Course: "BSIT", Year: 2},
    {Name: "Adolf Hitler", Age: 20, Course: "BSIT", Year: 2}
  ];
  const filterStudents = input 
  ?students.filter(({Name})=>Name.startsWith(input)) 
  :students

  const inputHandler = (e)=>(  //for handling inputs
    setInput(e.target.value)
  )
  

  return (
    <div>
    <h1>FIND NAME</h1>
    <input type="text"  onChange={inputHandler} value={input}/>
    <div className="list">
      {filterStudents.length === 0? (<h3>No Names matched</h3>):
        (filterStudents.map(({Name, Age, Course, Year})=>(
          <div className='listBox'>
            <h3> Name: {Name}</h3>
            <h4> Age: {Age}</h4>
            <h4>Course: {Course}</h4>
            <h4>Year: {Year}</h4>
          </div>
        )))
      }
    </div>
    </div>
  )
}
