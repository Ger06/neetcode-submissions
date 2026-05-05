class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i = 0
        let j = 1
        let longest = s.length > 0 ? 1 : 0
        let aux = new Map()
        aux.set(s[0],0)
        while(j<s.length){
            
            if(!aux.has(s[j])){
                aux.set(s[j],j)
                longest = Math.max(longest,j+1-i)
                j ++
            }else{
              i = aux.get(s[j]) +1
                j = i +1
                aux.clear()
                aux.set(s[i],i)
            }
        }
        return longest
    }
}
