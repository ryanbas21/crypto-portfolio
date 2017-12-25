### Unit Testing
Tape is used for unit testing.

[Tape Documentation](https://github.com/substack/tape)
 * Tape is good for dead simple unit tests.

Here is an example unit test:
 ```
 import test from 'tape'; // import tape
 import file from '../filepath' // import your file that you are going to import
  // or
 import { unit1, unit2, unit3 } from '../filepath';

 test('What you are testing', nest => {
    nest.test('Unit :: what unit/ what it is', t => {
        const msg = 'what should happen'; // this is like a bug report if it fails
        const expected = 1; // what should happen when you run the function
        const actual = add(0, 1); // what actually happens when you run the function

        t.same(actual, expected, msg) // same is an alias for deepEqual this does the test
        t.end() // end the current test
    });
 });
 ```


## TDD

It is good practice to use TDD (Test Driven Development)
 * Write your unit test first
 * Watch it fail (because you haven't implemented the function)
 * Implement the function
 * Make sure it passes the test

## Further Resources for unit testing
 [5 Questions every unit test should answer](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d)
 [TDD The RITE way](https://medium.com/javascript-scene/tdd-the-rite-way-53c9b46f45e3)
