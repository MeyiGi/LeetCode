class Solution {
public:
    int minimizedStringLength(string s) {
        unordered_set<int> res(s.begin(), s.end());
        return res.size();
    }
};