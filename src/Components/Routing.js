import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from './Login';
import SignupForm from './Signup';
import WelcomePage from './Welcome';
import ExpenseTracker from './Main';
export default class Routing extends Component {
  render() {
    return (
      <div>
        <Router>
            <Routes>
                <Route path='/' element={<WelcomePage/>}/>
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/signup' element={<SignupForm/>}/>
                <Route path='/main' element={<ExpenseTracker/>}/>

            </Routes>
        </Router>


      </div>
    )
  }
}
