#include <vector>
#include <unordered_map>
#include <unordered_set>

class Solution {
public:
    bool validPath(int n, std::vector<std::vector<int>>& edges, int source, int destination) {
        if (destination == source) {
            return true;
        }

        std::unordered_map<int, std::vector<int>> graph;
        std::unordered_set<int> visited;

        for (const auto& edge : edges) {
            graph[edge[0]].push_back(edge[1]);
            graph[edge[1]].push_back(edge[0]);
        }

        return dfs(graph, visited, source, destination);
    }

private:
    bool dfs(const std::unordered_map<int, std::vector<int>>& graph, std::unordered_set<int>& visited, int node, int destination) {
        if (node == destination) {
            return true;
        }

        visited.insert(node);

        for (int neighbor : graph.at(node)) {
            if (visited.find(neighbor) == visited.end()) {
                if (dfs(graph, visited, neighbor, destination)) {
                    return true;
                }
            }
        }

        return false;
    }
};

