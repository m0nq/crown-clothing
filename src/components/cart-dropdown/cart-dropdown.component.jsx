import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';
import { Button } from '../button/button.component';
import { CartItem } from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

export const CartDropdown = () => {
    const { cartItems, setCartState } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckout = () => {
        setCartState(false);
        navigate('/checkout');
    };

    return (
        <>
            <div className="cart-dropdown-container">
                <div className="cart-items">
                    {cartItems.length ? (
                        cartItems.map(item => <CartItem cartItem={item} key={item.id}/>)
                    ) : (
                        <span className="empty-message">Your cart is empty</span>
                    )}
                </div>
                <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
            </div>
        </>
    );
};
