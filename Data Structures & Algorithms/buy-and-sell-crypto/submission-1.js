class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
  let max = 0
  let min = prices[0]
  
  let aux = 0
  while(aux < prices.length){
    if(prices[aux +1] > prices[aux]){
      min = Math.min(min, prices[aux])
      max = Math.max(max, prices[aux + 1] - min) 
      }
      aux ++
    }
  return max
    }
}
