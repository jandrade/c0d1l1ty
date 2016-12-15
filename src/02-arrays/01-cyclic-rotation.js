// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/**
 * Rotate an array given K positions
 * @type {Array} A
 * @type {Number} K
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
console.log(solution([3, 8, 9, 7, 6], 1));
console.log(solution([3, 8, 9, 7, 6], 3));