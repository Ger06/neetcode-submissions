class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let aux = new Set(numbers)

        for(let i=0; i<numbers.length; i++){
            if(aux.has(target -numbers[i])){
                let index = numbers.indexOf(target - numbers[i])
                if(i !== index){
                return ([i+1, index+1])
                }
            }
        }
        return false
    }
}
