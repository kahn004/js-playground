import test from 'tape';
import deepFreeze from 'deep-freeze';
import { addToCart, addToNewCart } from '../js/immutability';

test('addToCart()', (assert) => {
    const msg = 'addToCart() should add a new item to the cart.';
    const originalCart = {
        items: []
    };
    const cart = addToCart(
        originalCart,
        {
            name: 'Digital SLR Camera',
            price: '1495'
        },
        1
    );

    const expected = 1;
    const actual = cart.items.length;

    assert.equal(actual, expected, msg);

    assert.deepEqual(originalCart, cart, 'mutates original cart.');
    assert.end();
});

test('addToNewCart()', (assert) => {
    const msg = 'addToNewCart() should add a new item to the cart.';
    const originalCart = {
        items: []
    };

    // throws an error if original is mutated
    deepFreeze(originalCart);

    const cart = addToNewCart(
        originalCart,
        {
            name: 'Digital SLR Camera',
            price: '1495'
        },
        1
    );

    const expected = 1;
    const actual = cart.items.length;

    assert.equal(actual, expected, msg);

    assert.notDeepEqual(originalCart, cart,
        'should not mutate original cart.'
    );
    assert.end();
});
