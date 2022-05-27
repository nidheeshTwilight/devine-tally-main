import React, {useState} from 'react'
import stylesheet from "../login/forgot.css"


function Forgot(){
    const [name, setName]=useState("");
    function handleChange (event){
      setName (event.target.value);
    }
    return(
      <div>
       <body className='bgimg' ></body>
        <h1 className='hint1'> Forgot Password</h1>
        <form action="form_sent.php" method="post">
        <input className='input123'
          onChange= {handleChange}
          type="text"
          placeholder="Email ID*"
          />
        <input className='password'
          onChange= {handleChange}
          type="text"
          placeholder="Phone Number*"
          />
          </form>
        <button > Submit</button>
      </div>
    )
}
export default Forgot