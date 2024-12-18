import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex items-center justify-center min-h-screen">
      <div>
      <h1 className="text-2xl font-bold mb-4">Enter your key</h1>
      <input 
        type="text" 
        placeholder="key" 
        className="border border-gray-300 p-2 rounded"
      />
      </div>
    </div>
    </>
  )
}

export default App
