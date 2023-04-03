import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext({
    isCartOpen: false,
    setCartState: () => { }
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setCartState] = useState(false);
    const value = { isCartOpen, setCartState };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
