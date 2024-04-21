/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    if (destination === source) {
        return true;
    }

    const graph = new Map();
    const visited = new Set();

    for (const [u, v] of edges) {
        if (!graph.has(u)) {
            graph.set(u, []);
        }
        graph.get(u).push(v);

        if (!graph.has(v)) {
            graph.set(v, []);
        }
        graph.get(v).push(u);
    }

    return dfs(graph, visited, source, destination);
}

function dfs(graph, visited, node, destination) {
    if (node === destination) {
        return true;
    }

    visited.add(node);

    for (const neighbor of graph.get(node) || []) {
        if (!visited.has(neighbor)) {
            if (dfs(graph, visited, neighbor, destination)) {
                return true;
            }
        }
    }

    return false;
}
