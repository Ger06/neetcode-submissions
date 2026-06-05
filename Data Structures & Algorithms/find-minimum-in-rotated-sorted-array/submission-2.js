class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let i = 0
        let r = nums.length -1
        let middle = Math.ceil((i+r)/2)

        let min = Math.min(nums[i],nums[r],nums[middle])

        while(i > middle || middle < r){
            if(nums[i] > nums[middle] && nums[middle] < nums[r]){
                if(nums[middle] <= min){
                    min = nums[middle]
                    middle --
                    continue
                }else{
                    return min
                }
                
            }if(nums[i] < nums[middle] && nums[middle] > nums[r]){
                if(min >= nums[r]){
                  min = nums[r]
                r --
                continue
                }else{
                    return min
                }
            }
            return min
        }
        return min
    }
}
