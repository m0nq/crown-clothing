import { useEffect } from 'react';
import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

export const CartIcon = () => {
    const { isCartOpen, setCartState, cartCount } = useContext(CartContext);
    const toggleCartState = () => setCartState(!isCartOpen);

    return (
        <>
            <div className="cart-icon-container" onClick={toggleCartState}>
                <ShoppingIcon className="shopping-icon"/>
                <span className="item-count">{cartCount}</span>
            </div>
        </>
    );
};

