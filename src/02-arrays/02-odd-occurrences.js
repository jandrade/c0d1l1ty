// https://codility.com/demo/results/trainingKY899D-BJ2/
import test from 'ava';

/**
 * Returns the unpaired element in an array
 * @param {Array} A
 */
function solution(A) {
    const N = A.length;
    let i = 0;
    let unpaired;
    
    for (i; i < N; i++) {
        // Returns a one in each bit position for which the corresponding bits of either but not both operands are ones.
        unpaired ^= A[i];
    }
    
    return unpaired;
}

// test cases
test('02/02 Odd Ocurrences', t => {
    t.is(solution([9, 3, 9, 3, 9, 7, 9]), 7);
});