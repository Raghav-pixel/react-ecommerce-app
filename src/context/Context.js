import {createContext, useContext, useReducer} from 'react';
import { cartReducer } from './Reducers';
import products from '../db/data';

const Cart = createContext();

const Context = ({ children }) => {

    const [ state, dispatch ] = useReducer(cartReducer, {
        products: products,
        cart: [],
        totalPrice: 0,
        discount: 0,
    });

    return (
        <Cart.Provider value={{ state, dispatch }}>
        {children}
        </Cart.Provider>
    );
}

export default Context;

export const CartState = () => {
    return useContext(Cart);
}