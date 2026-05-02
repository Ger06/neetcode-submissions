class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let ans = []
        nums.sort((a,b)=>a-b)

        for(let i=0; i<nums.length -2; i++){
            for(let j=i+1; j<nums.length -1; j++){
                for(let k=j+1; k<nums.length; k++){
                    let aux = [nums[i],nums[j],nums[k]]
                    if(nums[i] + nums[j] + nums[k] === 0 && !ans.some(s=> JSON.stringify(s) === JSON.stringify(aux))){
                        ans.push([nums[i],nums[j],nums[k]])
                    }
                }
            }
        }
        return ans
    }
}
