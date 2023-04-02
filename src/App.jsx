import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import PircelList from './Component/Header/PircelList/PircelList'
import Chart from './Component/Chart/Chart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <PircelList></PircelList>
     <div className='py-12'>
     <Chart></Chart>
     </div>
    </div>
  )
}

export default App
