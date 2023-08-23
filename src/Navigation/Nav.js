import React from 'react';
import './Nav.css';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';

const Nav = ({ query, handleInputChange }) => {
  return (
    <nav>
      <div className='nav-container'>
        <input 
          type='text'
          className='search-input'
          placeholder='Enter your search shoes'
          value={query}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className='profile-container'>
        <BsFillCartFill style={{ color: 'white' }} className='nav-icons'/>
        <span style={{ color: 'white' }}>{3}</span>
        {/* <a href='/'>
          <AiOutlineHeart className='nav-icons'/>
        </a>
        <a href='/cart'>
          <AiOutlineShoppingCart className='nav-icons'/>
        </a>
        <a href='/'>
          <AiOutlineUserAdd className='nav-icons'/>
        </a> */}
      </div>
    </nav>
  );
}

export default Nav;
