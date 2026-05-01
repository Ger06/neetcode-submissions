class Solution {
    hasDuplicate(nums) {
    for(let i=0; i<nums.length; i++){
        let aux= nums[i]
        for(let j=i+1; j<nums.length; j++){
            if(nums[j] === aux){

                return true
            }
        }
    }
    return false
    }
}
