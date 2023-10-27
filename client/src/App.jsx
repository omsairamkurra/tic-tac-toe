import { useState } from 'react'
import './App.css'
import { Board } from './Board'
import Players from './Players'

function App() {
  const [reset,setReset]=useState(false)
  const [winner,setWinner]=useState("")

  const Reset=()=>{
    setReset(true)
  }

  return (
    <div className='App'>
      <div className={`winner ${winner !== "" ? "" : "shrink"}`}>
        <div className='winner-text'>{winner}</div>
        <button onClick={Reset}>Reset</button>
      </div>
       <Board reset={reset} setReset={setReset} winner={winner} setWinner={setWinner}/>
       <Players/>
    </div>
  )
}

export default App
