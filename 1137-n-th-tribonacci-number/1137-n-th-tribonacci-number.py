class Solution:
    def __init__(self):
        self.memo = {}

    def tribonacci(self, n: int) -> int:
        if n in self.memo:
            return self.memo[n]

        match n:
            case 2:
                return 1
            case 1:
                return 1
            case 0:
                return 0
        
        result = self.tribonacci(n - 3) + self.tribonacci(n - 2) + self.tribonacci(n - 1)
        
        self.memo[n] = result
        return result
