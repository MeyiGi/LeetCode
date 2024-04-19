/**
 * @param {string[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const dfs = (i, j) => {
        if (grid[i][j] === "1") {
            visited.add(`${i},${j}`);
        } else {
            return;
        }

        if (i > 0 && !visited.has(`${i - 1},${j}`)) {
            dfs(i - 1, j);
        }
        if (j > 0 && !visited.has(`${i},${j - 1}`)) {
            dfs(i, j - 1);
        }
        if (i !== m - 1 && !visited.has(`${i + 1},${j}`)) {
            dfs(i + 1, j);
        }
        if (j !== n - 1 && !visited.has(`${i},${j + 1}`)) {
            dfs(i, j + 1);
        }
    };

    const m = grid.length;
    const n = grid[0].length;

    const visited = new Set();
    let res = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1" && !visited.has(`${i},${j}`)) {
                res++;
                dfs(i, j);
            }
        }
    }

    return res;
};