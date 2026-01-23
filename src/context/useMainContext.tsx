import { cartReducer } from "@/store/reducer";
import type { MainContextType, StoreState, CartItem, LikedItem, ProductCardPropsI } from "@/types";
import { createContext, useEffect, useReducer, useCallback } from "react";
import { toast } from "sonner";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { STORAGE_KEYS } from "@/utils/constants";

export const MainContext = createContext<MainContextType>({
  cartItems: [],
  likedItems: [],
  addToCart: () => {},
  addToLike: () => {},
  removeFromCart: () => {},
  removeFromLike: () => {},
  addOne: () => {},
  removeOne: () => {},
});

export function MainContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(STORAGE_KEYS.CART_ITEMS, []);
  const [likedItems, setLikedItems] = useLocalStorage<LikedItem[]>(STORAGE_KEYS.LIKED_ITEMS, []);

  const state: StoreState = { cartItems, likedItems };
  
  const [storeState, dispatch] = useReducer(cartReducer, state);

  const addToCart = useCallback((item: ProductCardPropsI) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    toast.success("Added to cart!", {
      position: "top-right",
      duration: 2000,
    });
  }, []);

  const addToLike = useCallback((item: ProductCardPropsI) => {
    dispatch({ type: "ADD_TO_LIKE", payload: item });
    toast.success("Added to liked items!", {
      position: "top-right",
      duration: 2000,
    });
  }, []);

  const removeFromCart = useCallback((itemId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
    toast.success("Removed from cart", {
      position: "top-right",
      duration: 2000,
    });
  }, []);

  const removeFromLike = useCallback((itemId: number) => {
    dispatch({ type: "REMOVE_FROM_LIKE", payload: itemId });
    toast.success("Removed from liked items!", {
      position: "top-right",
      duration: 2000,
    });
  }, []);

  const addOne = useCallback((itemId: number) => {
    dispatch({ type: "ADD_ONE", payload: itemId });
  }, []);

  const removeOne = useCallback((itemId: number) => {
    dispatch({ type: "REMOVE_ONE", payload: itemId });
  }, []);

  useEffect(() => {
    setCartItems(storeState.cartItems);
  }, [storeState.cartItems, setCartItems]);

  useEffect(() => {
    setLikedItems(storeState.likedItems);
  }, [storeState.likedItems, setLikedItems]);

  const contextValue: MainContextType = {
    cartItems: storeState.cartItems,
    likedItems: storeState.likedItems,
    addToCart,
    addToLike,
    removeFromCart,
    removeFromLike,
    addOne,
    removeOne,
  };

  return (
    <MainContext.Provider value={contextValue}>
      {children}
    </MainContext.Provider>
  );
}
