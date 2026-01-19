import { myReucer } from "@/store/store";
import { ADD_TO_CART, ADD_TO_LIKE } from "@/store/type";
import { createContext, useEffect, useReducer } from "react";
import { toast } from "sonner";

type ProductT = {
    title: string;
    price: number,
    image: string,
    id: number,
    quantity?: number
}

type LikedProductT = {
    title: string;
    price: number,
    image: string,
    id: number,
    isInCart?: boolean
}

export const MainContext = createContext({
  cartItems: [] as ProductT[],
  likedItems: [] as LikedProductT[],
  addToCart: (_item: ProductT) => {},
  addToLike: (_item: LikedProductT) => {},
  removeFromCart: (_itemId: number) => {},
  removeFromLike: (_itemId: number) => {},
  addOne: (_itemId: number) => {},
  removeOne: (_itemId: number) => {},
});

export function MainContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") as any[],
    likedItems: JSON.parse(localStorage.getItem("likedItems") || "[]") as any[],
  };

  const [state, dispatch] = useReducer(myReucer, initialState);

  function addToCart(item: any) {
    dispatch({ type: ADD_TO_CART, payload: item });
    toast.success("Added to cart!", {
      position: "top-right",
      duration: 2000,
    });
  }

  function addToLike(item: any) {
    dispatch({ type: ADD_TO_LIKE, payload: item });
    toast.success("Added to liked items!", {
      position: "top-right",
      duration: 2000,
    });
  }

  function removeFromCart(itemId: number) {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
    toast.success("Removed from cart", {
      position: "top-right",
      duration: 2000,
    });
  }

  function removeFromLike(itemId: number) {
    dispatch({ type: "REMOVE_FROM_LIKE", payload: itemId });
    toast.success("Removed from liked items!", {
      position: "top-right",
      duration: 2000,
    });
  }

  function addOne(itemId: number) {
    dispatch({ type: "ADD_ONE", payload: itemId });
  }

  function removeOne(itemId: number) {
    dispatch({ type: "REMOVE_ONE", payload: itemId });
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  useEffect(() => {
    localStorage.setItem("likedItems", JSON.stringify(state.likedItems));
  }, [state.likedItems]);

  return (
    <MainContext.Provider
      value={{
        cartItems: state.cartItems,
        likedItems: state.likedItems,
        addToCart,
        addToLike,
        removeFromCart,
        removeFromLike,
        addOne,
        removeOne,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
