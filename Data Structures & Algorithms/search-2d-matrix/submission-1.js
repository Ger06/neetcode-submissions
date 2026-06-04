class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let i = 0
        let r = matrix[0].length -1
        let k = 0
        while(k <= r && i < matrix.length){
            let middle = Math.ceil((r + k) /2)
            
            if(matrix[i][r] === target){
                return true
            }else if(matrix[i][r] < target){
                i ++
                k = 0
            }else{
                if(matrix[i][middle] === target){
                    return true
                }else if(matrix[i][middle] < target){
                    k = middle +1
                }else{
                    r = middle - 1
                }
            }
        }
        return false
    }
}
