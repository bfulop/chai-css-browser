Browser utils for Chai
=

A collection of helpers to simplify writing assertions for browser testing with Mocha and Chai.

`.color('#ffeebb')`
--

So far the only method is to convert between `hex`, `rgb` and `rgba` definitions:

```javascript
expect('#BBCCDD').to.be.color('rgb(187, 204, 221)')
```

