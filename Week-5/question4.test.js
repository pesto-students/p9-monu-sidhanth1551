const functions = require('./question4');

test('Add 2+2 to equal 4', ()=>{
    expect(functions.sum(2,2)).toBe(4);
});

test('Add 10-5 to equal 5', ()=>{
    expect(functions.diff(10,5)).toBe(5);
});
test('Add 3*2 to equal 6', ()=>{
    expect(functions.product(3,2)).toBe(6);
});