class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        res = 0

        m = len(grid)
        n = len(grid[0])

        for i in range(m):
            for j in range(n):
                if grid[i][j]:
                    if (j == 0) or (not grid[i][j - 1]):
                        res += 1
                    if (i == 0) or (not grid[i - 1][j]):
                        res += 1
                    if (i == m - 1) or (not grid[i + 1][j]):
                        res += 1
                    if (j == n - 1) or (not grid[i][j + 1]):
                        res += 1
        return res