import lodash from 'lodash';

export const addToCart = (cart, item, quantity) => {
    cart.items.push({
        item,
        quantity
    });
    return cart;
};

export const addToNewCart = (cart, item, quantity) => {
    const newCart = lodash.cloneDeep(cart);

    newCart.items.push({
        item,
        quantity
    });
    return newCart;
};
