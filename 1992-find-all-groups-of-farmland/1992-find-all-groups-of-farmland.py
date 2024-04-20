class Solution:
    def findFarmland(self, land: List[List[int]]) -> List[List[int]]:
        def dfs(i, j, res):
            if (
                (j != n - 1 and land[i][j + 1] == 1) and
                (i != m - 1 and land[i + 1][j] == 1)
            ):
                dfs(i + 1, j + 1, res)
            elif (j != n - 1 and land[i][j + 1] == 1):
                dfs(i, j + 1, res)
            elif (i != m - 1 and land[i + 1][j] == 1):
                dfs(i + 1, j, res)
            else:
                res.extend([i, j])
                for i in range(res[0], res[-2] + 1):
                    for j in range(res[1], res[-1] + 1):
                        visited.add((i, j))

        ans = []

        m = len(land)
        n = len(land[0])
        
        visited = set()

        for i in range(m):
            for j in range(n):
                if land[i][j] and (i, j) not in visited:
                    res = [i, j]
                    visited.add((i, j))
                    dfs(i, j, res)
                    ans.append(res)

        return ans