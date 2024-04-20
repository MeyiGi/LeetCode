#include <vector>
#include <unordered_set>

class Solution {
public:
    std::vector<std::vector<int>> findFarmland(std::vector<std::vector<int>>& land) {
        std::vector<std::vector<int>> ans;
        int m = land.size();
        int n = land[0].size();
        std::unordered_set<std::string> visited;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (land[i][j] && visited.find(std::to_string(i) + "," + std::to_string(j)) == visited.end()) {
                    std::vector<int> res = {i, j};
                    visited.insert(std::to_string(i) + "," + std::to_string(j));
                    dfs(i, j, res, land, visited);
                    ans.push_back(res);
                }
            }
        }

        return ans;
    }

private:
    void dfs(int i, int j, std::vector<int>& res, std::vector<std::vector<int>>& land, std::unordered_set<std::string>& visited) {
        if ((j != land[0].size() - 1 && land[i][j + 1] == 1) && (i != land.size() - 1 && land[i + 1][j] == 1)) {
            dfs(i + 1, j + 1, res, land, visited);
        } else if (j != land[0].size() - 1 && land[i][j + 1] == 1) {
            dfs(i, j + 1, res, land, visited);
        } else if (i != land.size() - 1 && land[i + 1][j] == 1) {
            dfs(i + 1, j, res, land, visited);
        } else {
            res.push_back(i);
            res.push_back(j);
            for (int x = res[0]; x <= res[2]; x++) {
                for (int y = res[1]; y <= res[3]; y++) {
                    visited.insert(std::to_string(x) + "," + std::to_string(y));
                }
            }
        }
    }
};

