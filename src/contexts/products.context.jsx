import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

import SHOPDATA from '../shop-data.json';

export const ProductsContext = createContext({
    products: [],
    setProducts: () => []
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const value = { products, setProducts };

    useEffect(() => {
        // return onAuthStateChanged$(async user => {
        //     if (user) {
        //         await createUserDocument(user);
        //     }
        setProducts(SHOPDATA);
        // });
    }, []);

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
