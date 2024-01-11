import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200 p-0" style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center shadow-lg bg-white rounded-xl px-2 py-2'>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor : "red"}}  >Red</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor : "green"}} >Green</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor : "Blue"}} >Blue</button>  
          <button onClick={() => setColor("olive")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor : "Olive"}} >Olive</button>
          <button onClick={() => setColor("grey")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor : "Grey"}} >Grey</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor : "Yellow"}} >Yellow</button>
          <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor : "Pink"}} >Pink</button>
          <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor : "Purple"}} >Purple</button>
          <button onClick={() => setColor("lavender")} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor : "Lavender"}} >Lavender</button>
          <button onClick={() => setColor("beige")} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor : "Beige"}} >Beige</button>
          <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor : "Black"}} >Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
