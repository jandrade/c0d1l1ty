// https://codility.com/demo/results/training5XVDVK-PZD/

/**
 * Counts the minimal number of jumps that the small frog must perform to reach its target
 * @param {Number} X Initial position
 * @param {Number} Y Final position
 * @param {Number} D Jump size
 * 
 * @returns {Number} Minimal number of jumps
 */
function solution(X, Y, D) {
    return Math.ceil((Y - X)/D);
}

// test cases
console.log(solution(10, 85, 30));
console.log(solution(30, 120, 10));