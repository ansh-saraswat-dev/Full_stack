import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter] = useState(15)
  // let counter=15

  // const addValue = () => {
  //   // console.log("clicked",counter);
  //   // counter = counter + 1; 
  //   if (counter < 20){
  //     setCounter(counter+ 1)
  //   }
  //   }
  
  // const removeValue = () =>{
  //   if (counter > 0){
  //     setCounter(counter - 1)
  //   }
  // }

// Advanced method to do is 
const addValue = () => {
  setCounter(prev=> Math.min(prev+1, 20))
}
const removeValue = () =>{
  setCounter(prev=> Math.max(prev-1,0))
}
  return (
    <>
      <h1>Chai aur ansh</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value{counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value{counter}</button>
    </>
  )
}

export default App
