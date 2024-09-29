import { useState } from 'react'
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import PropTypes from 'prop-types';
import Login from './Login';
import Signup from './Signup';
import Navbar from './components/Navbar'
import './App.css'
import { AuthContextProvider } from './context/authContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='pages w-screen h-screen'>
      <BrowserRouter>
        <Navbar></Navbar>
        <div className='w-full h-[92%]  flex justify-center '>
          <Routes>
            <Route
              path="/" 
              element={<Home/>}>
            </Route>
            <Route
              path="/login" 
              element={<Login/>}>
            </Route>
            <Route
              path="/signup" 
              element={<Signup/>}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
