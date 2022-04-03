import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (

        <div className='mx-24 flex  justify-between mt-2'>
            <div>
                <h2 className='text-xl'>Logo </h2>
            </div>
          <div className='flex gap-16 text-xl text-green-500'>
          <NavLink className={({isActive}) => (isActive ? 'text-red-600': 'text-green-500')} to='/'> Home </NavLink>
            <NavLink className={({isActive}) => (isActive ? 'text-red-600': 'text-green-500')} to='/review'> Review </NavLink>
            <NavLink className={({isActive}) => (isActive ? 'text-red-600': 'text-green-500')} to='/dashboard'> Dashboard </NavLink>
            <NavLink className={({isActive}) => (isActive ? 'text-red-600': 'text-green-500')} to='/blog'> Blog </NavLink>
            <NavLink className={({isActive}) => (isActive ? 'text-red-600': 'text-green-500')} to='/about'> About </NavLink>
          </div>
           
        </div>
    );
};

export default Navbar;