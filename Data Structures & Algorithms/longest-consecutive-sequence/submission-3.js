class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const check = new Set(nums)
        console.log(check)
        let longest = 0
       

        for(let num of check){
            if(!check.has(num- 1)){
                let long = 0
                while(check.has(num + long)){
                    long++
                }
                longest = Math.max(longest, long)
            }
        }
        return longest
    }
}
