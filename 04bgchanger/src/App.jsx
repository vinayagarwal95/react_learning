import { useState } from 'react'
import './App.css'

function App() {

  const [bgColor, setBgColor] = useState('black')

  function changeBg(color) {
    setBgColor(color)
  }

  return (
    <>
      <div className='w-full h-screen duration=200' style={{backgroundColor: bgColor}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => changeBg('blue')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: 'blue'}}>Blue</button>
            <button onClick={() => setBgColor('green')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{ backgroundColor: 'green' }}>reen</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
