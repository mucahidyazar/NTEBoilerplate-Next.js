/*eslint no-case-declarations: "off"*/
import {ADD_TO_CART, DECREASE_QUANTITY} from '../../types'

const INITIAL_STATE = {
  cartItems: [],
  total: 0,
  totalItems: 0,
}

export const MainReducer = (state = INITIAL_STATE, action) => {
  const dummyCartItems = [...state.cartItems]

  switch (action.type) {
    case ADD_TO_CART:
      const itemIndex = state.cartItems.findIndex(
        item => item.slug === action.data.slug,
      )
      if (itemIndex === -1) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            {
              ...action.data,
              quantity: 1,
            },
          ],
          total: state.total + action.data.price,
          totalItems: state.totalItems + 1,
        }
      }

      dummyCartItems[itemIndex].quantity++

      return {
        ...state,
        cartItems: dummyCartItems,
        total: state.total + action.data.price,
        totalItems: state.totalItems + 1,
      }

    case DECREASE_QUANTITY:
      const foundedItemIndex = state.cartItems.findIndex(
        item => item.slug === action.slug,
      )
      const foundedItem = dummyCartItems[foundedItemIndex]

      if (foundedItem.quantity === 1) {
        dummyCartItems.splice(foundedItemIndex, 1)
        return {
          ...state,
          cartItems: dummyCartItems,
          total: state.total - foundedItem.price,
          totalItems: state.totalItems - 1,
        }
      }
      foundedItem.quantity--
      return {
        ...state,
        cartItems: dummyCartItems,
        total: state.total - foundedItem.price,
        totalItems: state.totalItems - 1,
      }

    default:
      return state
  }
}
