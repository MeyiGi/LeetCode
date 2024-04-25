class Solution {
public:
    int longestIdealString(string s, int k) {
        vector<int> dp(27, 0);
        int n = s.length();

        for (int i = n - 1; i >= 0; i--) {
            int cc = s[i] - 'a';
            int maxi = INT_MIN;

            int left = max(cc - k, 0);
            int right = min(cc + k, 26);

            for (int j = left; j <= right; j++) {
                maxi = max(maxi, dp[j]);
            }

            dp[cc] = maxi + 1;
        }

        return *max_element(dp.begin(), dp.end());
    }
};