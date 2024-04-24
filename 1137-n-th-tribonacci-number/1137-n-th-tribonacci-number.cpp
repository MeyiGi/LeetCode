class Solution {
public:
    unordered_map<int, int> memo;

    int tribonacci(int n) {
        if (memo.find(n) != memo.end())
            return memo[n];
        
        switch (n) {
            case 2:
                return 1;
            case 1:
                return 1;
            case 0:
                return 0;
        }

        int result = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);
        this->memo[n] = result;
        
        return result;
    }
};