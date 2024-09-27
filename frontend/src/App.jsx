import { useState } from 'react'
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='pages w-screen h-screen'>
      <BrowserRouter>
      <Navbar></Navbar>
        <div className='w-full h-[90%]  flex justify-center '>
          <Routes>
            <Route
              path="/" 
              element={<Home/>}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
