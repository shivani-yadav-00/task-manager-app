import { useState } from 'react'
import './App.css'
import TaskApp from './TaskApp'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <TaskApp/>
        </div>
    </>
  )
}

export default App
