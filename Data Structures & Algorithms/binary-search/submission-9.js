class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let r = nums.length-1
        let middle = Math.ceil((r - l)/2)

        while(l <= r){
            if(nums[middle] === target){
                return middle
            }else if(nums[middle] < target){
              l = middle + 1
              middle = Math.ceil((l+r)/2)
                                  
            }else{
              r = middle - 1
              middle = Math.ceil((l+r)/2)
            }
        }
        return -1
    }
}
