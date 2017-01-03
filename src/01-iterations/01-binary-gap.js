// https://codility.com/demo/results/trainingS3ZYVX-K9D/

import test from 'ava';

/**
 * Find longest sequence of zeros in binary representation of an integer.
 * @param {Number} N
 */
function solution(N) {
    // binary representation
    const bin = N.toString(2);
    const len = bin.length;
    let i = 0;
    // sequence of consecutive zeros
    let counter = 0;
    // maximum sequence
    let count = 0;
    
    for (i; i < len; ++i) {
        if (parseInt(bin[i]) === 0) {
            counter++;
        } else {
            // Update total count only if the new counter is higher
            if (counter > count) {
                count = counter;
            }
            // reset counter
            counter = 0;
        }
    }

    return count;
}

// test cases
test('01/01 Binary Gap', t => {
    t.is(solution(9), 2);
    t.is(solution(529), 4);
    t.is(solution(20), 1);
    t.is(solution(15), 0);
    t.is(solution(1041), 5);
});