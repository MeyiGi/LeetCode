/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let res = 0;

    const m = grid.length;
    const n = grid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) {
                if ((j == 0) || !(grid[i][j - 1]))
                    res += 1;
                if ((i == 0) || !(grid[i - 1][j]))
                    res += 1;
                if ((i == m - 1) || !(grid[i + 1][j]))
                    res += 1;
                if ((j == n - 1) || !(grid[i][j + 1]))
                    res += 1;
            }
        }
    }
    return res;
};