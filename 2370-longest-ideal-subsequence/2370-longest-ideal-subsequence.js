var longestIdealString = function(s, k) {
    let dp = new Array(27).fill(0);
    let n = s.length;

    for (let i = n - 1; i >= 0; i--) {
        let cc = s[i];
        let ind = cc.charCodeAt(0) - 'a'.charCodeAt(0);
        let maxi = -Infinity;

        let left = Math.max(ind - k, 0);
        let right = Math.min(ind + k, 26);

        for (let j = left; j <= right; j++) {
            maxi = Math.max(maxi, dp[j]);
        }

        dp[ind] = maxi + 1;
    }

    return Math.max(...dp);
};