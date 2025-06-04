import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard'
import addEmployee from './Components/addEmployee'
import viewEmployee from './Components/viewEmployee'
import EditEmployee from './Components/EditEmployee'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login}></Route>
          <Route path='/register' Component={Register}></Route>
          <Route path='/dashboard' Component={Dashboard}></Route>
          <Route path='/addEmployee' Component={addEmployee}></Route>
          <Route path='/viewEmployee' Component={viewEmployee}></Route>
          <Route path="/editEmployee/:id" Component={EditEmployee}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
