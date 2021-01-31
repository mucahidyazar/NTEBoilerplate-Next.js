import { ADD_TO_CART, DECREASE_QUANTITY } from '../../types'

export const addToCart = (data) => {
  return async (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      data,
    })
  }
}

export const decreaseQuantity = (slug) => {
  return async (dispatch) => {
    dispatch({
      type: DECREASE_QUANTITY,
      slug,
    })
  }
}
