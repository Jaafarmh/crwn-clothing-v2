import CART_ACTION_TYPES from "../cart/cart.types";

export const CART_INITIAL_STATE ={
    isCartOpen:false,
    cartItems: [],
  
  }
  
 export const cartReducer = (state =CART_INITIAL_STATE , action = {}) =>{
    const {type, payload} = action;
  
    switch(type){
      case CART_ACTION_TYPES.Set_CartItems :
        return{
          ...state,
          cartItems : payload,
        }
        case CART_ACTION_TYPES.Set_IsCartOpen :
        return{
          ...state,
          isCartOpen: payload,
        }
        default:
          return state;
    }
  
  }
  