const updatedDiscount = (state, payload) => {
    state.discount += (Number(payload.prevPrice) - Number(payload.newPrice));
    return state.discount;
}

const reducedDiscount = (state, payload) => {
    state.discount -= (Number(payload.prevPrice) - Number(payload.newPrice));
    return state.discount;
}

const addPrice = (state, payload) => {
    state.totalPrice += Number(payload.prevPrice);
    return state.totalPrice;
}

const reducePrice = (state, payload) => {
    state.totalPrice -= Number(payload.prevPrice);
    return state.totalPrice;
}

const increaseQuantity = (state, payload) => {
    state.cart.forEach((c) => {
        if(c.title === payload.title) {
            c.qty = c.qty + 1;
        }
    });
    return { 
        ...state, 
        cart: [ ...state.cart ], 
        totalPrice: addPrice(state, payload),
        discount: updatedDiscount(state, payload) 
    };
}

const decreaseQuantity = (state, payload) => {
    state.cart.forEach((c) => {
        if(c.title === payload.title) {
            if(c.qty>1) {
                c.qty = c.qty - 1;
            } else {
                c.qty = c.qty - 1;
                state.cart = state.cart.filter((item) => item !== c);
            }
        }
    });
    return { 
        ...state, 
        cart: [ ...state.cart ], 
        totalPrice: reducePrice(state, payload), 
        discount: reducedDiscount(state, payload)
    };
}

const addToCart = (state, payload) => {
    if(!state.cart.length>0) {
        return {
            ...state, 
            cart: [...state.cart, { ...payload, qty: 1 }], 
            totalPrice: addPrice(state, payload),
            discount: updatedDiscount(state, payload)
        };
    } else {
        return ((state.cart.some(c => c.title === payload.title)) ? 
        increaseQuantity(state, payload) : 
        { 
            ...state, 
            cart: [...state.cart, { ...payload, qty: 1 }], 
            totalPrice: addPrice(state, payload),
            discount: updatedDiscount(state, payload)
        });
    }
}

const removeFromCart = (state, payload) => {
    return (state.cart.some(c => c.title === payload.title) ? 
    decreaseQuantity(state, payload) :
    { 
        ...state, 
        cart: state.cart.filter((c) => c.title !== payload.title), 
        totalPrice: reducePrice(state, payload),
        discount: reducedDiscount(state, payload)
    });
}

export const cartReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return addToCart(state, action.payload);
        case "REMOVE_FROM_CART":
            return removeFromCart(state, action.payload);
        default:
            return state;
    }
}