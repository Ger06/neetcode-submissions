class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let aux = new Map()

        for(let i=0; i<numbers.length; i++){
            if(aux.has(target-numbers[i])){
                return [aux.get(target - numbers[i]), i+1]
            }else{
                aux.set(numbers[i], i+1)
            }
        }
        return false
    }
}
