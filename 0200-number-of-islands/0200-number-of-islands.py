class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        
        unordered_set<string> visited;
        int res = 0;
        
        function<void(int, int)> dfs = [&](int i, int j) {
            if (grid[i][j] == '1') {
                visited.insert(to_string(i) + "," + to_string(j));
            } else {
                return;
            }
            
            if (i > 0 && visited.find(to_string(i - 1) + "," + to_string(j)) == visited.end()) {
                dfs(i - 1, j);
            }
            if (j > 0 && visited.find(to_string(i) + "," + to_string(j - 1)) == visited.end()) {
                dfs(i, j - 1);
            }
            if (i != m - 1 && visited.find(to_string(i + 1) + "," + to_string(j)) == visited.end()) {
                dfs(i + 1, j);
            }
            if (j != n - 1 && visited.find(to_string(i) + "," + to_string(j + 1)) == visited.end()) {
                dfs(i, j + 1);
            }
        };
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == '1' && visited.find(to_string(i) + "," + to_string(j)) == visited.end()) {
                    res++;
                    dfs(i, j);
                }
            }
        }
        
        return res;
    }
};

