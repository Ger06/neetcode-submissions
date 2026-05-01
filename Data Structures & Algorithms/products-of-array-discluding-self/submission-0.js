class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
                let ans= []
        for(let i=0; i<nums.length; i++){
          let count = 1
          for(let j=0; j<nums.length; j++){
            if(i === j)continue
            else{
              count *= nums[j]
              }
            }
            ans.push(count)
            count = 1
          }
          return ans
    }
}
