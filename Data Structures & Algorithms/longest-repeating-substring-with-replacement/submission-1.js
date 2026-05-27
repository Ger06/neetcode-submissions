class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

  let longest = 0
  
  let l = 0
  let r = 1
  let aux = new Map([[s[l],1]])
  
  while(l < s.length -1 && r < s.length){
    if (!aux.has(s[r])){
      aux.set(s[r],1)
      }else{
        aux.set(s[r], aux.get(s[r]) +1)
        }
      
      const valorMaximo = Math.max(...aux.values());
      
      if(r-l + 1 <= valorMaximo){
        longest = Math.max(longest, r - l + 1)
        r ++
        }
      else{
        if(((r - l) + 1 - valorMaximo) <= k){
        longest = Math.max(longest, r - l + 1)
        r ++}else{
          aux.set(s[l], aux.get(s[l]) -1)
          l ++
          r ++
          }
    }
  }
    
    return longest
    }
}
