class Solution {
public:
    int islandPerimeter(vector<vector<int>>& grid) {
        int res = 0;

        int m = grid.size();
        int n = grid[0].size();

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
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
    }
};