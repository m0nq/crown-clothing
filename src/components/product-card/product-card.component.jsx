import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import Button from '../button/button.component';
import { Price } from './product-card.styles';
import { Name } from './product-card.styles';
import { ProductCartContainer } from './product-card.styles';
import { Footer } from './product-card.styles';

export const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <ProductCartContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={addProductToCart}
            >
                Add to card
            </Button>
        </ProductCartContainer>
    );
};
