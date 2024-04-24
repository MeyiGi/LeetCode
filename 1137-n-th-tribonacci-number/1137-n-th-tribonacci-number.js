/**
 * @param {number} n
 * @return {number}
 */
 let memo = {}
var tribonacci = function(n) {
    if (n in memo) {
        return memo[n];
    }
    switch(n) {
        case 2:
            return 1;
        case 1:
            return 1;
        case 0:
            return 0
    }

    const result = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);
    memo[n] = result;

    return result;
};