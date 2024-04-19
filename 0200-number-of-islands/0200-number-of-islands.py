class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        def dfs(i, j):
            if grid[i][j] == "1":
                visited.add((i, j))
            else:
                return
            
            if i > 0 and (i - 1, j) not in visited:
                dfs(i - 1, j)
            if j > 0 and (i, j -1) not in visited:
                dfs(i, j - 1)
            if i != m - 1 and (i + 1, j) not in visited:
                dfs(i + 1, j)
            if j != n - 1 and (i, j + 1) not in visited:
                dfs(i, j + 1)
            

        m = len(grid)
        n = len(grid[0])

        visited = set()
        res = 0

        for i in range(m):
            for j in range(n):
                if grid[i][j] == "1":
                    if (i, j) not in visited:
                        res += 1
                        dfs(i, j)

        return res