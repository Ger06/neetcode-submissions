class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if(nums.length === 1) return [nums[0]]
        let ans = []
        let i = 0
        let r = 0
        let win = [nums[i]]
        
        
        while(r<nums.length){
            if(1 + r - i === k){
              let g = Math.max(...win)
              ans.push(g)
              r ++
              win.shift()
              i ++
              win.push(nums[r])
            }else{
                r ++
                win.push(nums[r])
            }
          
           


        }
        return ans
    }
}
