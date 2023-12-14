import React from 'react'
import "./Footer.css"

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='footer-container'>
    <Link to='/'className='logo' ><span className='logo-name'><span className='e'>Expense Tracker</span></span></Link>
      <div className='container'>
        <div>
          <p className='about-content'>
          expense tracker is helping you to maintain a well-organized and consolidated record of different expenses.</p>
        </div>
        <div>
          <h3 className='f-link'>Quick Links👇</h3>
          <p> <Link to="/" className='text-decoration'>Home</Link></p>
          <p><Link to="/my-transactions" className='text-decoration'>My Transaction</Link></p>
          <p><Link to="/add-transactions" className='text-decoration'>Add Transaction</Link></p>

        </div>
    
        <div>
          <h3 className='f-link'>Starts Here😊</h3>
          <p><Link to="/login" className='text-decoration'><i class="bi bi-box-arrow-in-right"></i> Login</Link> </p>
          <p> <Link to="/signup" className='text-decoration'><i class="bi bi-unlock"></i> SignUp</Link></p>
         
         
            
        
          </div>
        </div>

    <div className='copyright'>Copyright © BGK💗2023</div>
    </footer>
  )
}

export default Footer;