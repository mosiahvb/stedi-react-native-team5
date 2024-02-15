import sayHello from '../utils/helloworld.mjs';
import assert from 'assert';

it("Tests Hello", () => {
    const hello = sayHello();
    assert.equal(hello, "hello");
})