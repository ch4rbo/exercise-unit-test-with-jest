// import the function sum from the app.js file
const { suma, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = suma(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);

});

test('1Euro = 1.2 U$s', () => {
    //inside the test we call our sum function with 2 numbers
    let total = fromEuroToDollar(1);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(1.2);
    
});

test('1 U$S = 106.58 Yen', () => {
    //inside the test we call our sum function with 2 numbers
    let total = fromDollarToYen(1);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(106.58);
    
});


test('1 YEN = 0.00625 Pound', () => {
    //inside the test we call our sum function with 2 numbers
    let total = fromYenToPound(1);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(0.00625);
    
});

