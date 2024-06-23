import React from 'react'
import {BrowserRouter,Routes,Router,Route} from 'react-router-dom'
import Register from  './Register.jsx'
import Login from './Login.jsx'
import StdReg from './StdReg.jsx'
import Student from './students.jsx'
import Studentdetails from './studentdetails.jsx'
import Updatefee from './UpdateFee.jsx'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/' element = {<Login/>}/>
        <Route path='/stdreg' element = {<StdReg/>}/>
        <Route path='/students' element={<Student/>}/>
        <Route path='/studentdetails' element={<Studentdetails/>}/>
        <Route path='/updatefees' element={<Updatefee/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App