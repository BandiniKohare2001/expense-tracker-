import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
  const [user, setUser] = useState({});


 
  useEffect(()=>{
    const userStorage = JSON.parse(localStorage.getItem('expenseuser') || '{}');
    setUser(userStorage);
},[])

  return (
    <div className='nav-container'>
      <Link to='/'className='logo' ><span className='logo-name'>Expense Tracker</span></Link>
    
      <div className='nav-links'>

        <Link to="/" className='nav-btn'>Home</Link>
        <Link to="/add-transaction" className='nav-btn'>Add Transaction</Link>
        <Link to="/transactions" className='nav-btn'>Transactions</Link>
        <Link to="/signup" className='nav-btn'>Signup</Link>
        <Link to="/login" className='nav-btn'>Login</Link>
        
      </div>

      <div className='user'>
       Hay!👩🏻‍💼{user.name} 

        {
          user?.name ? (<button className='btn-logout'
          onClick={()=>{
            localStorage.removeItem("expenseuser");
            window.location.href = "/login"
          }}
          >Logout</button>) : null
        }
      </div>

    </div>
  )
}

export default Navbar;