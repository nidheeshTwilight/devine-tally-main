import React, { useState } from 'react'
import { navigate } from 'react-big-calendar/lib/utils/constants';
import stylesheet from "../login/signup.css"


function Signup() {
    const [name, setName] = useState("");
    function handleChange(event) {
        setName(event.target.value);
    }
    return (
        <div>
            <body className='bgimg' ></body>
            <form action="form_sent.php" method="post">
                <div><h1 className='head'>Sign Up</h1><input className='namefield'
                    onChange={handleChange}
                    type="text"
                    placeholder="Username*"
                /></div>
                <div><input className='pass'
                    onChange={handleChange}
                    type="no"
                    placeholder="Phone Number*"
                /></div>
                <div><input className='pass'
                    onChange={handleChange}
                    type="password"
                    placeholder="Password*"
                /></div>
                <div style={{ textAlign: "center" }}>
                    <p class="form-group form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" name="remember" required /> I agree the terms and conditions
                        </label>
                    </p>
                </div>
                <div>
                    <button type="submit" class="btn-btn-primary" style={{marginTop:"20px"}} >Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Signup