class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    /*abcbae*/
    lengthOfLongestSubstring(s) {
        let l = 0
        let long = 0
        let checker = new Set()

        for(let r = 0; r<s.length; r++){
            while(checker.has(s[r])){
                checker.delete(s[l])
                l += 1
            }
            checker.add(s[r])
            long = Math.max(long, r-l+1)
        }
        return long
    }
}
