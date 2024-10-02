import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/login'

function App() {

  return (
    <UserContextProvider>

      <Login />
      <Profile />
      
    </UserContextProvider>
  )
}

export default App