// https://codility.com/demo/results/trainingKMGEEJ-8JZ/

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
console.log(solution([3, 8, 9, 7, 6], 1));
console.log(solution([3, 8, 9, 7, 6], 3));