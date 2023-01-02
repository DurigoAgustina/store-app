import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  productsCart: localStorage.getItem('productsCart')
    ? JSON.parse(localStorage.getItem('productsCart'))
    : [],
  quantityCart: 0,
  totalAmountCart: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.productsCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if(itemIndex >= 0) {
        state.productsCart[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = {...action.payload, cartQuantity: 1};
        state.productsCart.push(tempProduct);
        toast.success('added a new product to cart', {
        position: 'bottom-left'
        })
      };
      localStorage.setItem('productsCart', JSON.stringify(state.productsCart));
    },
    removeFromCart: (state, action) => {
      console.log(action.payload.id);
      const id = action.payload;
      state.quantityCart -= 1;
      state.productsCart = state.productsCart.filter(item => item.id !== id);
      localStorage.setItem('productsCart', JSON.stringify(state.productsCart));
    },
    decreaseCart: (state, action) => {
      const itemIndex = state.productsCart.findIndex(
        productsCart => productsCart.id === action.payload.id
      )

      if(state.productsCart[itemIndex].cartQuantity > 1){
        state.productsCart[itemIndex].cartQuantity -= 1;
        localStorage.setItem('productsCart', JSON.stringify(state.productsCart));
      }

    },
    clearCart: (state) => {
      state.productsCart= [];
      localStorage.setItem('productsCart', JSON.stringify(state.productsCart));
    },
    getTotals(state) {
      let {total, quantity} = state.productsCart.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.quantityCart = quantity;
      state.totalAmountCart = total;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlice.actions