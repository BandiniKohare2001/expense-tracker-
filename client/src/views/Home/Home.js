import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';
import Footer from '../../components/Footer/Footer';
import poster from "../../asset/poster.png"


export default function Home() {


  return (
    <div>
      <Navbar />
      <div className='header-img'>
      
        <div className='header-content'> <h1 className='header-heading'><span className='e'>E</span>xpences <span className='e'>T</span>racker</h1>
          <p className='header-para'>Expense Tracker help to maintain the record of daily expenses. The Expense Tracker app tracks all the expenses and helps the user to manage his/her expenses so that the user is the path of financial stability</p></div>

      </div>

      <h1 className='text-center hea-feature'>Features</h1>
      <div className='fetures-container'>
        <div>
        <div className='fetures'>
          <h2>Managing transaction records </h2>
          <p>One of the key functions of an expense tracker is helping you to maintain a well-organized and consolidated record of different expenses.</p>
        </div><br />
        <div className='fetures'>
          <h2>Expense tracking  </h2>
          <p>This corresponds to the primary function of the app, namely, expense tracking.</p>
        </div></div>
        <img src={poster} className='poster' />
      </div>
      <Footer />
    </div>

  );
}


