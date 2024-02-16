import sayHello from '../utils/hello.david.js';
import assert from 'assert';

it("Tests Hello", () => {
    const hello = sayHello();
    assert.equal(hello, "hello");
})