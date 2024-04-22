class Solution {
public:
    int openLock(std::vector<std::string>& deadends, std::string target) {
        if (std::find(deadends.begin(), deadends.end(), "0000") != deadends.end()) {
            return -1;
        }

        std::queue<std::pair<std::string, int>> q;
        std::unordered_set<std::string> visited(deadends.begin(), deadends.end());
        q.push({"0000", 0});
        visited.insert("0000");

        while (!q.empty()) {
            std::string lock = q.front().first;
            int turns = q.front().second;
            q.pop();

            if (lock == target) {
                return turns;
            }

            for (int i = 0; i < 4; i++) {
                std::string up = lock;
                std::string down = lock;
                up[i] = (up[i] - '0' + 1) % 10 + '0';
                down[i] = (down[i] - '0' + 9) % 10 + '0';

                if (visited.find(up) == visited.end()) {
                    visited.insert(up);
                    q.push({up, turns + 1});
                }

                if (visited.find(down) == visited.end()) {
                    visited.insert(down);
                    q.push({down, turns + 1});
                }
            }
        }

        return -1;
    }
};

