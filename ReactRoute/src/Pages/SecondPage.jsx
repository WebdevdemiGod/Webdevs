import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'


function SecondPage({loggedin}) {
  
  return (
    <div className='SecondPage'>
      {loggedin ? <h1>SECOND PAGE NI BAI</h1> 
      : <h1>HELLO</h1>}
    </div>
  )
}

export default SecondPage
