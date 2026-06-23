class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let long = nums1.length + nums2.length
        let even = long % 2 === 0 ? true : false
        let aux = []
        let one = 0
        let two = 0
        while((one + two) < long){
            if(nums1[one] <= nums2[two] || nums2.length === 0){
                aux.push(nums1[one])
                one ++
            }else{
                aux.push(nums2[two])
                two ++
            }
           
        }
         if(even){
                let a = (long/2) -1 
                let b = (long/2)
                return (aux[a]+aux[b])/2
            }else{
                let c = Math.floor(long/2)
                return aux[c]
            }
    }
}
