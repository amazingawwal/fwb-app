import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0);

useEffect(() => {
  fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
    .then(data => console.log(data));
}, []);


  return (
    <>
      <h1>Hi</h1>
    </>
  )
}

export default App
