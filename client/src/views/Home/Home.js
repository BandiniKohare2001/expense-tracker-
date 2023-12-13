import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`home-page-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className='home-nav-div navbar-phone navbar-phone-child'>
       
        <Navbar />
        <span className='tog-btn-close' onClick={handleToggleSidebar}>❌</span>
      </div>
      <div>
        <div className='home-heading'>
          <span className='head'>
            <span className='tog-btn-open' onClick={handleToggleSidebar}>
              🟰
            </span>

            Expence Tracker System
          </span>
        </div>
        <img className='home-img' src='https://repository-images.githubusercontent.com/410385203/215ee742-7e0a-4902-a9ca-8d2f42b126fd' />
      </div>
    </div>
  );
}


