import { myReucer } from '@/store/store';
import { ADD_TO_CART, ADD_TO_LIKE } from '@/store/type';
import { createContext,  useReducer } from 'react';
import { toast } from 'sonner';

export const MainContext = createContext({
    cartItems: [] as any[],
    likedItems: [] as any[],
    addToCart: (item: any) => {},
    addToLike: (item: any) => {},   
    removeFromCart: (itemId: number) => {},
    removeFromLike: (itemId: number) => {},
    addOne: (itemId: number) => {},
    removeOne: (itemId: number) => {}
});

export function MainContextProvider({ children }: { children: React.ReactNode }) {
    const initialState = {
        cartItems: [],
        likedItems: []
    }

    const [state, dispatch] = useReducer(myReucer, initialState);

    console.log(state);
    
    function addToCart(item: any) {
        dispatch({ type: ADD_TO_CART, payload: item });
        toast.success('Added to cart!',{
            position: 'top-right',
            duration: 2000
        });
    }

    function addToLike(item: any) {
        dispatch({ type: ADD_TO_LIKE, payload: item });
         toast.success('Added to liked items!',{
            position: 'top-right',
            duration: 2000
        });
    }

    function removeFromCart(itemId: number) {
        dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
         toast.success('Removed from cart',{
            position: 'top-right',
            duration: 2000
        });
    }

    function removeFromLike(itemId: number) {
        dispatch({ type: 'REMOVE_FROM_LIKE', payload: itemId });
         toast.success('Removed from liked items!',{
            position: 'top-right',
            duration: 2000
        });
    }

    function addOne(itemId: number) {   
        dispatch({ type: 'ADD_ONE', payload: itemId });
    }

    function removeOne(itemId: number) {
        dispatch({ type: 'REMOVE_ONE', payload: itemId });
    }

    return (
        <MainContext.Provider value={{
            cartItems: state.cartItems,
            likedItems: state.likedItems,
            addToCart,
            addToLike,
            removeFromCart,
            removeFromLike,
            addOne,
            removeOne
        }}>
            {children}
        </MainContext.Provider>
    )


}