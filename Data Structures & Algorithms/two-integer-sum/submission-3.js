class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const reference = new Map()

        for(let i=0; i<nums.length; i++){
            if(reference.has(target - nums[i])){
                return [reference.get(target-nums[i]), i]
            }else{
                reference.set(nums[i],i)
            }
        }
        return false
    }
}
