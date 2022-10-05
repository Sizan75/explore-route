import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
          <NavLink className={(isactive)=>isactive ? 'active' : undefined} to='/'>Home</NavLink>  
          <NavLink to='/home'>Home</NavLink>  
          <NavLink to='/about'>About</NavLink>  
          <NavLink to='/friends'>Friends</NavLink>  
          <NavLink to='/posts'>Posts</NavLink>  

        </div>
    );
};

export default Header;