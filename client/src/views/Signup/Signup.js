import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Signup.css"
import { Link } from 'react-router-dom'
import axios from "axios"
function Signup() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

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
            window.location.href = "login";
        } else {
            alert(responce?.data?.message)
        }
    }

    return (
        <div className={`signup-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
            <div className='nav-div'> <Navbar />
            <span className='tog-btn-closes' onClick={handleToggleSidebar}>❌</span></div>
            <div>
                <div className='home-heading-signup'><span className='head-signup'>
                <span className='tog-btn-open' onClick={handleToggleSidebar}>
              🟰
            </span>
                     Expence Tracker System </span></div>
                <div>
                    <form className='form-container'>
                        <p className='text-center signup-heading'>Sign-Up</p>

                        <input className='input-signup'
                            type='text'
                            placeholder='Enter Your Name'
                            onChange={(e) => {
                                setName(e.target.value)
                            }} />

                        <input className='input-signup'
                            type='text'
                            placeholder='Enter Mob No'
                            onChange={(e) => {
                                setNumber(e.target.value)
                            }} />

                        <input className='input-signup'
                            type='text'
                            placeholder='Create Password'
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }} />

                        <input className='input-signup'
                            type='text'
                            placeholder='Enter Your Email'
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }} />

                        <button type='button' className='signup-btn' onClick={signup}>Create Account</button>

                        <p className='text-center'>Already have an account ? <Link to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )

}
export default Signup
