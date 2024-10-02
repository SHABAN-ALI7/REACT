import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input
        value={username}
        onChange={(e) => setUserName(e.target.value)}
         type="text" placeholder='username' />
        <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
         type="text" placeholder='Paswword' />
        <button onClick={handleSubmit}>login</button>
    </div>
  )
}

export default Login