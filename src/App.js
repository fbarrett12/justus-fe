import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import userActions from './redux/actions'
import Routes from './Routes'
import Nav from './components/Nav'
import Routes from './Routes'
import Nav from './components/Nav'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.token){
      dispatch(userActions.persistUser())
    }
    dispatch(userActions.getCauses())
  }, [dispatch])

  return (
    <Router >
      <div className="app">
      <Nav />
      <Routes />
      </div>
    </Router>
  )
  
}

export default App;
