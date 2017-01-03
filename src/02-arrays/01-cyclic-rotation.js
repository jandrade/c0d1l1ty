// https://codility.com/demo/results/trainingKMGEEJ-8JZ/
import test from 'ava';

/**
 * Rotate an array given K positions
 * @param {Array} A
 * @param {Number} K
 */
function solution(A, K) {
    let i = 0;
    let N = A.length;
    let rotated = [];

    if (K > 100 || N > 100) {
        return;
    }
    
    for (i; i < N; ++i) {
        rotated[(i+K) % N] = A[i];
    }
    
    return rotated;
}

// test cases
test('02/01 cyclic rotation', t => {
    t.deepEqual(solution([3, 8, 9, 7, 6], 1), [6, 3, 8, 9, 7]);
    t.deepEqual(solution([3, 8, 9, 7, 6], 3), [9, 7, 6, 3, 8]);
});