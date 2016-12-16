// https://codility.com/demo/results/trainingKY899D-BJ2/

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