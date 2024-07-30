import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='App'>
        <form >
          <caption> <b>Welcome!</b></caption>
          <caption> <b>SignUp</b></caption>
          <p>Please enter  your details below</p>
            <div>
                
                <input placeholder='Enter your First Name'></input>
            </div>

            <div>
                
                <input placeholder='Enter your Last Name '></input>
            </div>

            <div>
                
                <input placeholder='Enter your email '></input>
            </div>

            <div>
                
                <input placeholder='Enter your phone number'></input>
            </div>

            <div>
                
                <input placeholder='Enter password'></input>
            </div>

            <div>
                
                <input placeholder='Confirm password'></input>
            </div>
            <div>
                <button type='button' className='buttonSignUp'>SignUp</button>
            </div>
        </form>
        <br></br>
        <Link to="/Dashborad">Dashborad</Link>
    </div>
  )
}

export default SignUp