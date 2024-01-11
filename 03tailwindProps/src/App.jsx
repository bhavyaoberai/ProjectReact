import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "Bhavya",
    age : 21
  }

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4 ' >Tailwind CSS</h1>
      <Card username = "Bhavya" btnType="click"/>
      <Card username = "Jasan" btnType="we"/>
    </>
  )
}

export default App
