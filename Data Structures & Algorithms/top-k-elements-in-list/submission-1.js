class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let record={}
        for(let i=0; i<nums.length; i++){
            if(!record[nums[i]]){
                record[nums[i]] = 1
            }else{
            record[nums[i]] += 1
            }
        }
        let preAns = Object.entries(record).sort(([,a],[,b])=>b-a)
        console.log(preAns,"pre")
        let finalAns= []
        for(let j=0; j<k; j++){
            finalAns.push(preAns[j][0])
        }
        return finalAns
       
    }
}
