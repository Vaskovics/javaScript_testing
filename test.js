const assert = require('assert');
const { describe } = require('mocha');
const sum = require('./sum');
console.log(sum(1, 3));

describe('testing functions', ()=>{
    it('function return sum of two arguments of 10 and 5 is equal to 15:', () => {
        let a = 10;
        let b = 5;
        let expected = a+b;
        let result = sum(a, b);
        assert.ok(result == expected);
    })
    it('testing 1500 add to 1500 is 3000:', () => {
        let a = 1500;
        let b = 1500;
        let expected = 3000;
        let result = sum(a, b);
        assert.strictEqual(expected, result);
    })
    it('testing -1000 + 1000 is 0:', () =>{
        let a = -1000;
        let b = 1000;
        let expected = 0;
        let result = sum(a, b);
        assert.strictEqual(expected, result);
    })
})

