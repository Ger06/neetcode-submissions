class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums)
        let longest = 0

        for(let num of numsSet){
            if(!numsSet.has(num -1)){
                let count = 0
                while(numsSet.has(num + count)){
                    count ++
                }
                longest = Math.max(count, longest)
            }
        }
        return longest
    }
}
