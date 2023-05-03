import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import { RemoveButton } from './checkout-item.styles';
import { Value } from './checkout-item.styles';
import { Arrow } from './checkout-item.styles';
import { Quantity } from './checkout-item.styles';
import { BaseSpan } from './checkout-item.styles';
import { ImageContainer } from './checkout-item.styles';
import { CheckoutItemContainer } from './checkout-item.styles';

export const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemToCart } =
        useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <BaseSpan> {name} </BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan> {price}</BaseSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

