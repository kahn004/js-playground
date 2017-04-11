import test from 'tape';
import { getSecret, secret, partialApply, addX } from '../js/closure';

test('Closure for object privacy.', assert => {
    const msg = '.get() should have acces to the closure.';
    const expected = 1;
    const obj = getSecret(1);

    const actual = obj.get();

    try {
        assert.ok(secret, 'This throws an error.');
    } catch (e) {
        assert.ok(true,
            'The secret var is only available to privileged methods.');
    }

    assert.equal(actual, expected, msg);
    assert.end();
});

test('secret', assert => {
    const msg = 'secret() should return a function that returns the passed secret';

    const theSecret = 'Closures are easy.';
    const mySecret = secret(theSecret);

    const actual = mySecret();
    const expected = theSecret;

    assert.equal(actual, expected, msg);
    assert.end();
});

test('add10', assert => {
    const msg = 'partialApply() should partially apply functions.';

    const add = (a, b) => a + b;

    const add10 = partialApply(add, 10);

    const actual = add10(5);
    const expected = 15;

    assert.equal(actual, expected, msg);
    assert.end();
});
