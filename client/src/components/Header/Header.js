import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
    <div className='container'>
    <div className='logo'>
        <img src="" alt="Logo"/>
    </div>
    <div className='menu_content'>
        <div className='myTrips'>
            <h3>My Bookings</h3>
            <p>Manage your bookings</p>
        </div>
        <div className='sign'>
            <button type="submit">Login or Create Account</button>
        </div>
    </div>
  
</div>
    </div>
  )
}

export default Header
