class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let max = 0
        
        for(let i=0; i<heights.length; i++){
            let init = heights[i]
            let minAux = init
            for(let j= i+1; j<heights.length; j++){
                if(heights[j] === 0){
                    max = Math.max(max, minAux * (j  - i))
                    break
                }

                if(heights[i] > heights[j] && heights[j] !== 0){
                    minAux = Math.min(heights[j],minAux)
                }

                if(j === heights.length -1){
                  max = Math.max(max, minAux * ((j + 1) - i))
                  }
                  max = Math.max(max, minAux * ((j + 1) - i))
            }
            max = Math.max(minAux, max)
        }
        return max
    }
}
