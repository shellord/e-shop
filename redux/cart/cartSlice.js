import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems:
    typeof window !== 'undefined' && localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  totalQuantity: 0,
  totalPrice: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      )
      if (cartItem) {
        cartItem.quantity++
      } else {
        state.cartItems.push({ ...item, quantity: 1 })
      }
      state.totalQuantity++
      state.totalPrice += item.price
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    removeFromCart: (state, action) => {
      const item = action.payload
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      )
      if (cartItem.quantity === 1) {
        state.cartItems.splice(state.cartItems.indexOf(cartItem), 1)
      } else {
        cartItem.quantity--
      }
      state.totalQuantity--
      state.totalPrice -= item.price
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    incrementQuantity: (state, action) => {
      const item = action.payload
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      )
      cartItem.quantity++
      state.totalQuantity++
      state.totalPrice += item.price
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    decrementQuantity: (state, action) => {
      const item = action.payload
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      )
      if (cartItem.quantity === 0) {
        state.cartItems.splice(state.cartItems.indexOf(cartItem), 1)
      } else {
        cartItem.quantity--
        state.totalQuantity--
        state.totalPrice -= item.price
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions

export default cartSlice.reducer
