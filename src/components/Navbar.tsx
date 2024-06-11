import React,{useContext} from 'react'
import { login } from './Home.tsx'

export default function Navbar() {
    const loginInfo = useContext(login);

  return (
    <div>
      { loginInfo? <p>The user is logged in</p>: <p>The user is not logged in</p>}
    </div>
  )
}
