import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [data,setData] = useState(0);
  // function decreaseVal(){
  //   if(data -1 >= 0)
  //   {
  //     setData(data-1)
  //   } 
  // }

  const decreaseVal = () =>{
    if(data - 1 >= 0)
    {
      setData(data-1)
    } 
  }
  const increaseVal = () =>{
    if(data +1 <=20 )
    {
      setData(data+1)
    } 
  }
  return (
    <>
      <h1>Counter Project</h1>
      <h2>count = {data}</h2>
      <button onClick={increaseVal} >Increase</button>
      <button onClick={decreaseVal} >Decrease</button>
    </>
  )
}

export default App
