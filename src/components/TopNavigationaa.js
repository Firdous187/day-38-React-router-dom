import React from 'react'
import { Link } from 'react-router-dom'

function TopNavigationaa() {
  return (
    <div className="topNav">
        
        <Link to="/">Login</Link>
        <Link to="/SignUp">Signup</Link>
        
        <Link to="/App1">App1</Link>
        <Link to="/App2">App2</Link>
        <Link to="/App3">App3</Link>
        <Link to="/App4">App4</Link>
        <Link to="/App5">App5</Link>
    </div>
  )
}

export default TopNavigationaa