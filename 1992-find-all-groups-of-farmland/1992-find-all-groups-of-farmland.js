/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
    const dfs = (i, j, res) => {
        if (
            (j !== n - 1 && land[i][j + 1] === 1) &&
            (i !== m - 1 && land[i + 1][j] === 1)
        ) {
            dfs(i + 1, j + 1, res);
        } else if (j !== n - 1 && land[i][j + 1] === 1) {
            dfs(i, j + 1, res);
        } else if (i !== m - 1 && land[i + 1][j] === 1) {
            dfs(i + 1, j, res);
        } else {
            res.push(i, j);
            for (let i = res[0]; i <= res[2]; i++) {
                for (let j = res[1]; j <= res[3]; j++) {
                    visited.add(`${i},${j}`);
                }
            }
        }
    };

    const ans = [];
    const m = land.length;
    const n = land[0].length;
    const visited = new Set();

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (land[i][j] && !visited.has(`${i},${j}`)) {
                const res = [i, j];
                visited.add(`${i},${j}`);
                dfs(i, j, res);
                ans.push(res);
            }
        }
    }

    return ans;
};