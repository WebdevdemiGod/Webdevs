import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');

  function getData() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setTitle(json.message);
      });
  }

  return (
    <div>
      <h1>CLICK FOR RANDOM DOGGOS</h1>

      <button onClick={getData}>CLICK HERE PLS!</button>
      <div className='Dog'>
        {title && <img src={title} alt="dog" />}
      </div>
      
    </div>
  );
}


export default App