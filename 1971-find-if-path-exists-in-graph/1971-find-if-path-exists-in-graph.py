class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        if destination == source:
            return True
        
        def dfs(dest):
            for i in dest:
                if i == destination:
                    return True
                if i not in visited:
                    visited.add(i)
                    if dfs(graph[i]):
                        return True
            return False
            
        graph = defaultdict(list)
        
        for path in edges:
            graph[path[0]].append(path[1])
            graph[path[1]].append(path[0])
        
        curr_dest = graph[source]
        visited = set()
        visited.add(source)
        
        return dfs(curr_dest)
