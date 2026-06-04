class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let i = Math.ceil(h/piles.length)

        let max = Math.max(...piles)
        let candidate = 1
        let r = 0
        let total = 0
        
        while(candidate <= 1000000000){
            total += Math.ceil(piles[r]/candidate)
            r ++
            if(r === piles.length){
              if(total <= h){
                return candidate
                
              }else{
                candidate ++
                total = 0
                r = 0
                }
            }
        }
        return candidate
    }
}
