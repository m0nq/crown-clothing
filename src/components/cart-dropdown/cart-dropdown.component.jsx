import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import { CartItem } from '../cart-item/cart-item.component';
import { EmptyMessage } from './cart-dropdown.styles';
import { CartItems } from './cart-dropdown.styles';
import { CartDropdownContainer } from './cart-dropdown.styles';

export const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ?
                    cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>) :
                    <EmptyMessage>Your cart is empty</EmptyMessage>}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
};
