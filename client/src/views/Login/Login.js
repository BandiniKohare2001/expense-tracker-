import React, {useState} from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
function Login() {
    
const [email , setEmail]= useState("");
const [password , setPassword]= useState("");

const userLogin = async ()=>{

    const responce = await axios.post('/api/login',
    {
        email:email,
        password : password
    })
    alert(responce?.data?.message);

    if (responce?.data?.success) {
      localStorage.setItem('expenseuser', JSON.stringify(responce.data.data))
      window.location.href = "/";
  }

}
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const handleToggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen);
};
    return (
       
                <div className='login-page'>
                     <Navbar />
                    <form className='form-container'>
                        <p className='signup-heading'>Login</p>

                        <input className='input-signup' 
                        type='text'
                         placeholder='Enter Your Email'
                         onChange={(e)=>{
                            setEmail(e.target.value)
                         }} 
                         />

                        <input className='input-signup'
                         type='password'
                          placeholder='Create Password' 
                          onChange={(e)=>{
                            setPassword(e.target.value)
                          }}
                          />

                        <button type='button' className='signup-btn' onClick={userLogin}>Login</button>
                        <p className='text-center'>Create an account ? <Link to="/signup">Signup</Link></p>
                    </form>
                </div>
       
    )
}
export default Login;