class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let ind = nums.findIndex(e => e === target)
        if(ind || ind === 0){
            return ind
        }else{
            return -1
        }
    }
}
