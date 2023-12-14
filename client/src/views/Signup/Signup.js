import React, { useState } from 'react';
import "./Signup.css";
import { Link } from 'react-router-dom';
import axios from "axios";
import Navbar from '../../components/Navbar/Navbar'
function Signup() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');



    const signup = async () => {
        const responce = await axios.post("/api/signup",
            {
                name: name,
                email: email,
                password: password,
                number: number
            });

        if (responce?.data?.success) {
            alert(responce?.data?.message)
            window.location.href = "/login";
        } else {
            alert(responce?.data?.message)
        }
    }

    return (


        <div className='div'>
            <Navbar />
            <form className='signup-form'>
                <p className='signup-heading'>Sign-Up</p>

                <input className='input-signup'
                    type='text'
                    placeholder='Enter Your Name'
                    onChange={(e) => {
                        setName(e.target.value)
                    }} />

                <input className='input-signup'
                    type='text'
                    placeholder='Enter Your Email'
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                <input className='input-signup'
                    type='text'
                    placeholder='Create Password'
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                <input className='input-signup'
                    type='text'
                    placeholder='Enter Mob No'
                    onChange={(e) => {
                        setNumber(e.target.value)
                    }} />





                <button type='button' className='signup-btn' onClick={signup}>Create Account</button>

                <p className='text-center'>Already have an account ? <Link to="/login">Login</Link></p>
            </form>
        </div>

    )

}
export default Signup
