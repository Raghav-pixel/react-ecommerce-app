import React, { useEffect } from 'react';
import './Cart.css';
import { CartState } from '../context/Context';
import CartItemsCard from '../components/CartItemsCard';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { state: { cart, totalPrice, discount } } = CartState();
    const navigate = useNavigate();
  return (
    <div className='cart-container'>
      <div className='cart-items-card'>
        { 
        cart.length>0 ?
            (
            <>
                {cart.map((c) => (
                    <CartItemsCard 
                        img={c.img} 
                        title={c.title}
                        star={c.star}
                        reviews={c.reviews}
                        newPrice={c.newPrice}
                        prevPrice={c.prevPrice}
                        qty={c.qty}
                    />
                ))}
                <div className='order-btn-ctr' onClick={() => navigate('/checkout')}>
                    <button className='order-btn'>Place Order</button>
                </div>
            </>
            ) : 
            (
                <div className='empty-cart'>No items in the cart</div>
            )
        }
      </div>
      <div className='cart-price-card'>
        <h2 className='price-header'>Card details</h2>
        <hr></hr>
        <div className='price-title-ctr'>
            <p>Price ({cart.length>1 ? (`${cart.length} items`) : (`${cart.length} item`) })</p>
            <p>{totalPrice}</p>
        </div>
        <div className='discount-title-ctr'>
            <p>Discount</p>
            <p style={{ color: '#388e3c' }}>{discount}</p>
        </div>
        <div className='delivery-title-ctr'>
            <p>Delivery Charges</p>
            <p style={{ color: '#388e3c' }}>Free</p>
        </div>
        <hr></hr>
        <div className='final-price-ctr'>
            <h3>Total Amount</h3>
            <p style={{ fontWeight: 'bold' }}>{Number(totalPrice-discount)}</p>
        </div>
        <hr></hr>
        <p style={{ margin: '10px 10px 0px 10px', fontSize: '14px', color: '#388e3c' }}>You will save ${discount} on this order</p>
      </div>
    </div>
  );
}

export default Cart;
