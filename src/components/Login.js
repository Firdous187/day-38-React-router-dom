import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='App'>
        <form className='formMain'>
        
            <caption className='captionLogin' style={{backgroundColor:'gold', borderRadius:'50%'}}> <b>Welcome Back!</b></caption>
            
            <p>Please enter  your details below</p>
  
            <div>
            <fieldset>
                <legend className='legendfield'>Gmail</legend>
                <input  className="inputLegend" placeholder='Enter your email'></input>
            </fieldset>
            </div>
 
            <div>
                <br></br>
            <fieldset>
                <legend className='legendfield'>password</legend>
                <input  className="inputLegend" placeholder='Enter your password'></input>
            </fieldset>
            </div>
            <span>Forgot password</span>
            <div>
                <button type='button'> login</button>
            </div>

        </form>
        <br></br>
        <br></br>
        {/* <Link to="/Dashborad">Dashboard</Link> */}
        <br></br>
        <Link to="/SignUp"> SignUp</Link>
        <h1>Day 38</h1>
        <p>In day 38 i have learn about UseNavigate, UseLocation, NavLink, inline style</p>
        <br></br>
        <p>NavLink: basically NavLink is the advance version of link, the main purpose of using Navlink is to find the Link is in active state or not. And we can style it And also we pass the function in this.</p>
        <p>Inline Style: In React only we External and inline, And internal doesnot works. It follows only camelcase</p>
    </div>
  )
}

export default Login