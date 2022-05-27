import React, { useState } from 'react'
import stylesheet from "../login/signin.css"



function Signin() {
  const [name, setName] = useState("");
  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <body className='bgimg' ></body>
      <h1 className='hint1'> Sign in</h1>
      <form action="form_sent.php" method="post">
        <input className='input1'
          onChange={handleChange}
          type="text"
          placeholder="Username*"
        />
        <input className='password'
          onChange={handleChange}
          type="password"
          placeholder="Password*"
        />
      </form>
      <button><a href="Home">Login</a></button>
      <div className='signUP'>
        <p style={{ color: "white" }}>Already have an account <a href='Signup' style={{ color: "#6FEEB7" }} >Sign up </a></p>
      </div>
      <div className='signUP'>
        <a href='Forgot' style={{ color: "white" }}> Forgot Password </a>
      </div>
    </div>
  )
}
export default Signin