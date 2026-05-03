class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
  let quantity = 0
  let l=0
  let r= l+2
  let noLeft = 0
  let min = Math.min(...height)
  while(r<height.length){
    while(height[l+1] > height[l]){
      l++
      r++
      }
    if(height[r] >=height[l]){
      noLeft = 0
      let aux = 0
      for(let i=l+1; i<r; i++){
        aux += height[i]
        }
      if((Math.min(height[l],height[r]) * (r-l-1)) > aux){
        quantity += (Math.min(height[r],height[l]) * (r-l-1)) - aux
        l = r
        r = r+2
      }else{
        r++
        }
      }else{
        let aux =0
        
        for(let j=l+1; j<r; j++){
         
          if(height[r] - height[j] > 0){
            aux +=  height[r] - height[j]
          
          }
          }
          if(aux > 0){
            noLeft = aux
            }
          
          r++
         
        }
    }
    return quantity + noLeft
    }
}
