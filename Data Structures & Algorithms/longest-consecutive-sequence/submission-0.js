class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let aux = new Set(nums)
        let longest = 0

        for(let value of nums){
            
            if(!aux.has(value-1)){
                let length = 0
                while(aux.has(value+length)){
                length += 1
                
            }
            longest = Math.max(longest, length)
            }
            
            
        }
        return longest
    }
}
