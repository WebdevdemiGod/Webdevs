import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'
import FirstPage from './Pages/FirstPage'
import SecondPage from './Pages/SecondPage'

function App() {
  const [count, setCount] = useState(0)
  const[loggedin, setLoggedin]= useState(false);

  const Protected=({isLoggedin, children})=>{
    if(!isLoggedin){
      return children
    }else{
      return(
        <>
        <h1>not allowed</h1>
        </>
      )
    }
  }

  return (
    <div className='App'>
      
      <BrowserRouter>
      <button onClick={()=>setLoggedin(!loggedin)}>{loggedin==false?"Sign -In": "SignOut"}</button>
      <header>
        <NavLink to="/test">FirstPage</NavLink> <br />
        <NavLink to="/cool">SecondPage</NavLink> <br />
      </header>
        <Routes>
         <Route path="/test" element={<FirstPage/>} />
         <Route path="/cool" element={<Protected isLoggedin = {loggedin}>
           <SecondPage/>
         </ Protected>} /> 
         

        </Routes>
      </BrowserRouter>
      


    </div>
  )
}

export default App
