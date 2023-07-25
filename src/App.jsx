import React from 'react'
import Test from '../src/Test'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Test2 from './Test2'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test/>}/>
        <Route path="/test2" element={<Test2/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
