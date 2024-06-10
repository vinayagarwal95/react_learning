import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()

  }

  const generatePassword = useCallback( () => {
    let charSet = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+"

    for (let i = 1; i < length; i++) {
      charSet += str.charAt(Math.floor(Math.random() * str.length+1))
    }

    setPassword(charSet)
  }, [length, numberAllowed, charAllowed])


  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
          value={password}
          className='w-full px-3 py-1 outline-none'
          placeholder='Password'
          readOnly
        ref={passwordRef} />
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
      </div>
      <div
        className='flex text-sm gap-x-2'
      >
        <div className='flex items-center gap-x-1'>
          <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            name=''
            id='' />
          <label htmlFor="">Length: {length}</label>


        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            // defaultChecked={numberAllowed}
            checked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
          name='' id='' />
          <label htmlFor=""> Number</label></div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            name=""
            id="" />
          <label htmlFor="charInput">Character</label>
        </div>

      </div>
    </div>
  )
}

export default App
