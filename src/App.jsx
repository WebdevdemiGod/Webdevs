import { useState } from 'react'
import './App.css'
import DisplayHeroes from './DisplayHeroes';
import backgroundImage from './avengers.jpg';

export default function App() {
  const [input, setInput] = useState("");

  const heroes=[
    {ID: 11242345, Name: 'Tony Stark', Course: 'BSIT', Year: 5},
    {ID: 2543622, Name: 'Steve Rogers', Course: 'BSCS', Year: 70},
    {ID: 3323541, Name: 'Thor Odinson', Course: 'BSCS', Year: 223},
    {ID: 1235436, Name: 'Clint Barton', Course: 'BSIT', Year: 21},
    {ID: 3252556, Name: 'Bruce Banner', Course: 'BSCPE', Year: 22},
    {ID: 4235623, Name: 'Natasha Romanoff', Course: 'BSPS', Year: 21}
  ]

  const filteredHeroes = input
  ?heroes.filter(({ID})=>ID.toString().startsWith(input)):
  heroes;

  const inputChange = (e)=>{
    setInput(e.target.value);
  }

  return (
    <div className='main'>
      <header>
        <h1>AVENGER FILES</h1>
      </header>
        <label htmlFor="input">Search a Hero(by ID)</label><br />
        <input type="text" id="input" value={input} onChange={inputChange}/>
        <DisplayHeroes filteredHeroes={filteredHeroes}/>
    </div>
  )
}

