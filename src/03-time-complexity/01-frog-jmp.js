// https://codility.com/demo/results/training5XVDVK-PZD/
import test from 'ava';

/**
 * Counts the minimal number of jumps that the small frog must perform to reach its target
 * @param {Number} X Initial position
 * @param {Number} Y Final position
 * @param {Number} D Jump size
 * 
 * @returns {Number} Minimal number of jumps
 */
function solution(X, Y, D) {
    if (X > Y) {
        return;
    }

    return Math.ceil((Y - X)/D);
}

// test cases
test('03/01 Frog Jump', t => {
    t.is(solution(10, 85, 30), 3);
    t.is(solution(30, 120, 10), 9);
});