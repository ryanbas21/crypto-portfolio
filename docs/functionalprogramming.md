### Functional Programming

Functional Programming is an important concept in todays javascript world, and you have most likely already been exposed to it.

There are many terms that you may come across in functional programming that may sound daunting, but they are generally not.
While it is not important to memorize every data type and word, here are important ones that play a part in the codebase today.


## Pure Function:
* A function that given the same inputs always returns the same outputs AND does not have any side effects (network requests, disk write, mutations)
[What is a pure function](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)

## Higher Order Function:
* A higher order function is a function that takes a function as an input OR returns a function
example:

```
[1, 2, 3].map(value => value + 1l)
```
map accepts a function as an input.

```
function secret(msg) {
    return function {
        return msg;
    }
}
```
Secret returns a function that returns our secret message.

## Currying / partial application
* Currying is the process of a function that returns a function which expects one argument or (an arity of one).

```
function add(a) {
    return function (b) {
        return a + b
    }
}
```
add is curried here.

For More : [Curry vs Partial Application](https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8#.3ryufsecy)

* Hindley Milner Types: This is a type system popularized with haskell. (I'm no expert) but you may come across it as this codebase utilizes [Sanctuary](https://sanctuary.js.org/)
Example: [map](https://sanctuary.js.org/#map)

```
map :: Functor f => (a -> b) -> f a -> f b
```

* :: means a member of
* map is the function that is a member of the following
* Functor is a type class, with f being the variable in the type signature for that class
* (a -> b) parenthesis can indicate a function so here, map takes a function that acceps an `a` and returns a `b`
* `->` means we accept a new argument so this function is curried. `f a` is a functor of `a`'s i.e. `[1,2,3]` a would be a number.
* and finally we return a functor of b, which is what we get after applying our callback (see first bullet) to each number.
