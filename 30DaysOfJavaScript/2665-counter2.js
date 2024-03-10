// Write a function createCounter. 
// It should accept an initial integer init. 
// It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.


// MY SOLUTION

const createCounter = (init) => {
    let currentValue = init;

    return {
        increment: () => {
            currentValue += 1;
            return currentValue;
        },
        decrement: () => {
            currentValue -= 1;
            return currentValue;
        },
        reset: () => {
            currentValue = init;
            return currentValue;
        },
    };
};