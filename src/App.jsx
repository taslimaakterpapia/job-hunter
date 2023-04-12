import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Header from './component/Header/Header'
import List from './component/List/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar></Navbar>
     <Header></Header>
     <List></List>
    </div>
  )
}

export default App
