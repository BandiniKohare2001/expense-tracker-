import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
// import menu from "./menu.png"


function Navbar() {
  const [userdata, setUserdata] = useState({});


 
  useEffect(() => {
    const userFromlocalStorage = JSON.parse(localStorage.getItem('user') || '{}');
    setUserdata(userFromlocalStorage);
  }, [])

  return (
    <div className='nav-container'>
      <Link to='/'className='logo' ><span className='logo-name'>Expense Tracker</span></Link>
    
      <div className='nav-links'>

        <Link to="/" className='nav-btn'>Home</Link>
        <Link to="/transactions" className='nav-btn'>Transactions</Link>
        <Link to="/add-transaction" className='nav-btn'>Add Transaction</Link>
        <Link to="/signup" className='nav-btn'>Signup</Link>
        <Link to="/login" className='nav-btn'>Login</Link>
        
      </div>

      <div className='user'>
        {userdata.name}

        {
          userdata?.name? (<button className='btn-logout'
          onClick={()=>{
            localStorage.removeItem("user");
            window.location.href = "/login"
          }}
          >Logout</button>) : null
        }
      </div>

    </div>
  )
}

export default Navbar;