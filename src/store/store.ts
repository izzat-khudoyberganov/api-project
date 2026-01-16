import {
  ADD_ONE,
  ADD_TO_CART,
  ADD_TO_LIKE,
  REMOVE_FROM_CART,
  REMOVE_FROM_LIKE,
  REMOVE_ONE,
} from "./type";

type State = {
  image: string;
  title: string;
  price: number;
  quantity: number;
};

type Action =
  | { type: "ADD_TO_CART"; payload: any }
  | { type: "ADD_TO_LIKE"; payload: any }
  | { type: "REMOVE_FROM_CART"; payload: any }
  | { type: "REMOVE_FROM_LIKE"; payload: any }
  | { type: "ADD_ONE"; payload: any }
  | { type: "REMOVE_ONE"; payload: any };

export function myReucer(state: any, action: Action): State {
  switch (action.type) {
    case ADD_TO_LIKE:
      return {
        ...state,
        likedItems: [
          ...state.likedItems,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
      };
    case REMOVE_FROM_LIKE:
      return {
        ...state,
        likedItems: state.likedItems.filter(
          (el: any) => el.id !== action.payload
        ),
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (el: any) => el.id !== action.payload
        ),
      };
    case ADD_ONE:
      return {
        ...state,
        cartItems: state.cartItems.map((el: any) =>
          el.id == action.payload
            ? {
                ...el,
                quantity: el.quantity + 1,
              }
            : el
        ),
      };
    case REMOVE_ONE:
      return {
        ...state,
        cartItems: state.cartItems.map((el: any) =>
          el.id == action.payload
            ? {
                ...el,
                quantity: el.quantity - 1,
              }
            : el
        ),
      };
    default:
      console.log(state);
      return state;
  }
}
