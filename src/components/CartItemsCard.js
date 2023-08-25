import React, { useEffect } from 'react';
import { BsFillBagFill } from 'react-icons/bs';
import { CartState } from '../context/Context';

const CartItemsCard = ({ img, title, star, reviews, newPrice, prevPrice, qty }) => {
    const { state: { cart }, dispatch } = CartState();
    console.log(cart, '[cart][card]');
    const handleAdd = () => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                img, title, star, reviews, newPrice, prevPrice, qty
            }
        });
    }

    const handleRemove = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {
                img, title, star, reviews, newPrice, prevPrice
            }
        });

    }

  return (
    qty > 0 &&
    <section className="cart-items-ctr">
        <div className='img-ctr'>
            <img src={img} alt={title} className="card-img" />
            <div className='cart-toggle'>
                <button 
                    className='button'
                    onClick={handleRemove}
                >-</button>
                <div className='qty-ctr'>
                    {qty}
                    {/* <input className='input' type='number' max="10" /> */}
                </div>
                <button 
                    className='button'
                    onClick={handleAdd}
                >+</button>
            </div>
        </div>
        <div className="card-items-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
            <div className="price">
            <del>{prevPrice}</del> {newPrice}
            </div>
        </section>
        </div>
    </section>
  );
}

export default CartItemsCard;
