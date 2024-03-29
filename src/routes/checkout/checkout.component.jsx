import { useContext } from 'react';
import { CheckoutItem } from '../../components/checkout-item/checkout-item.component';

import { CartContext } from '../../contexts/cart.context';
import { Total } from './checkout.styles';
import { HeaderBlock } from './checkout.styles';
import { CheckoutHeader } from './checkout.styles';
import { CheckoutContainer } from './checkout.styles';

export const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    );
};
