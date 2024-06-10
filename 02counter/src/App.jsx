import { useState } from 'react'
import './App.css'

function App() {

  const [counter,setCounter] = useState(0)

  const addValue= () => {
    /*
    the following wont update the method 4 times as react implements batching which treats the following 4 statements as 1 only
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    */

    /* to avoid batching and update the value 4 times, do the following
    here the previous value can be accessed using the callback which then forces the state to return the value
    */
    setCounter((prevCounter)=> {
      return prevCounter+1
    })
    setCounter((prevCounter)=> 
       prevCounter+1
    )
    setCounter((prevCounter)=> 
       prevCounter+1
    )
    setCounter((prevCounter)=> 
       prevCounter+1
    )
    console.log(counter);
  }
  const removeValue= () => {
    setCounter(counter-1)
    console.log(counter);
  }

  return (
    <>
      <h1>React with Hitesh</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value </button>
      <button onClick={removeValue}>Remove value</button>
      <p>footer:</p>
    </>
  )
}

export default App
