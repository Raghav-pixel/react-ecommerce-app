import React from 'react';
import './Nav.css';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { CartState } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const Nav = ({ query, handleInputChange }) => {
  const { state : { cart } } = CartState();
  const navigate = useNavigate();
  console.log(cart)
  return (
    <nav>
      <div className='logo-ctr' onClick={() => navigate('/')}>
        Shopping Cart
      </div>
      <div className='nav-container'>
        <input 
          type='text'
          className='search-input'
          placeholder='Enter your search shoes'
          value={query}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className='profile-container' onClick={() => navigate('/cart')}>
        <a className='cart-ctr'>
          <BsFillCartFill style={{ color: 'white' }} className='nav-icons'/>
          {
            cart.length > 0 ? (
              <div className='cart-qty'><span>{cart.length}</span></div>
            ) : ''
          }
          <span style={{ color: 'white', marginLeft: '8px' }}>Cart</span>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
