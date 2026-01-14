import {
  ADD_TO_CART,
  ADD_TO_LIKE,
  REMOVE_FROM_CART,
  REMOVE_FROM_LIKE,
} from "./type";

type State = {
    image: string,
    title: string,
    price: number,
    quantity: number
}

type Action =
  | { type: "ADD_TO_CART" }
  | { type: "ADD_TO_LIKE" }
  | { type: "REMOVE_FROM_CART" }
  | { type: "REMOVE_FROM_LIKE", payload: number }

export function myReucer(state: State, action: Action):State {
  switch (action.type) {
    case ADD_TO_LIKE:
      console.log("Add to like", state);
      break;
    case REMOVE_FROM_LIKE:
      console.log("Remove from like");
      break;
    case ADD_TO_CART:
      console.log("Add to cart");
      break;
    case REMOVE_FROM_CART:
      console.log("Remove from cart");
      break;
    default:
      console.log("Undefined action type");
  }
}
