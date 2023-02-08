import React from 'react'
import './Header.css'
import logo from '../../assets/Booking.png'

const Header = () => {
  return (
    <div className='header'>
    <div className='container'>
    <div className='logo'>
        <img className='logo_header' src={logo} alt="Logo"/>
    </div>
    <div className='menu_content'>
        <div className='myTrips'>
            <h3>My Bookings</h3>
            <p>Manage your bookings</p>
        </div>
        <div className='sign'>
            <button className='btn' type="submit">
            <img src={logo} className='btn_logo'/>
            Login or Create Account</button>
        </div>
    </div>
  
</div>
    </div>
  )
}

export default Header
