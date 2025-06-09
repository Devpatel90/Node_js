import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard'
import addEmployee from './Components/addManager'
import viewManager from './Components/viewManager'
import EditEmployee from './Components/EditEmployee'
import ChangePassword from './Components/ChangePassword'
import addManager from './Components/addManager'
import ManagerLogin from './Components/Managerlogin'
import MPanel from './Components/MPanel'


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login}></Route>
          <Route path='/register' Component={Register}></Route>
          <Route path='/dashboard' Component={Dashboard}></Route>
          <Route path='/adminPass' Component={ChangePassword}></Route>
          <Route path='/addManager' Component={addManager}></Route>
          <Route path='/viewManager' Component={viewManager}></Route>
          <Route path='/ManagerLogin' Component={ManagerLogin}></Route>
          <Route path='/ManagerHome' Component={MPanel}></Route>
          {/* <Route path="/editEmployee/:id" Component={EditEmployee}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
