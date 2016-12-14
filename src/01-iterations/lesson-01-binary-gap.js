// https://codility.com/demo/results/trainingS3ZYVX-K9D/

/**
 * Find longest sequence of zeros in binary representation of an integer.
 * @type {Number} N
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
console.log(solution(9));
console.log(solution(529));
console.log(solution(20));
console.log(solution(15));
console.log(solution(1041));