class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1 === s2) return true
let aux = new Map()
        
        for(let i=0; i<s1.length; i++){
            if(aux.has(s1[i])){
                aux.set(s1[i], aux.get(s1[i]) +1)
            }else{
                aux.set(s1[i], 1)
            }
        }
        
        let comp = new Map(aux)
        let i=0
        while(i<s2.length -1){
            if(aux.has(s2[i]) && aux.get(s2[i]) >0){
                aux.set(s2[i], aux.get(s2[i]) -1)

                if(Math.max(...aux.values()) === 0){
                      return true
                      }
                
                let r = i+1
                
                while(r < i + s1.length){
                  if(aux.has(s2[r]) && aux.get(s2[r]) > 0){
                    aux.set(s2[r], aux.get(s2[r]) -1)
                    r ++
                    if(Math.max(...aux.values()) === 0){
                      return true
                      }
                    }else{
                      aux = new Map(comp)
                      i ++
                      break
                      }
                  }
                }else{
                  i ++
                  }
        }
        return false
    }
   
}
