import type { StoreState, StoreAction } from '@/types';
import {
  ADD_ONE,
  ADD_TO_CART,
  ADD_TO_LIKE,
  REMOVE_FROM_CART,
  REMOVE_FROM_LIKE,
  REMOVE_ONE,
} from './constants';

export function cartReducer(state: StoreState, action: StoreAction): StoreState {
  switch (action.type) {
    case ADD_TO_LIKE:
      return {
        ...state,
        likedItems: [
          ...state.likedItems,
          {
            ...action.payload,
            isInCart: state.cartItems.some(item => item.id === action.payload.id),
          },
        ],
      };

    case REMOVE_FROM_LIKE:
      return {
        ...state,
        likedItems: state.likedItems.filter(item => item.id !== action.payload),
      };

    case ADD_TO_CART: {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
        likedItems: state.likedItems.map(item =>
          item.id === action.payload ? { ...item, isInCart: false } : item
        ),
      };

    case ADD_ONE:
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload
            ? { ...item, quantity: Math.max(1, item.quantity + 1) }
            : item
        ),
      };

    case REMOVE_ONE:
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        ),
      };

    default:
      return state;
  }
}
