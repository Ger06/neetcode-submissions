class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
    if(t.length > s.length)return ""
        let minest = 0
        let aux = new Map()
        let ancla = 0

        for(let i=0; i<t.length; i++){
            if(aux.has(t[i])){
                aux.set(t[i], aux.get(t[i]) +1)
            }else{
                aux.set(t[i], 1)
            }
        }
        let j=0;
        let comp = new Map(aux)
        let first = false
        let start 
        while(j <s.length){

            if(aux.has(s[j]) && aux.get(s[j]) > 0){
                aux.set(s[j], aux.get(s[j]) -1)
                if(!first){
                    first = true
                    start = j
                }
                
              if(Math.max(...aux.values()) === 0){
                if(minest === 0){
                    ancla = start
                    minest =  j - start + 1
                }else{
                    if(j - start < minest){
                        ancla = start
                        minest = j - start + 1
                    }
                    
                }
                aux = new Map(comp)
                first = false
                j = start
            }
            j ++
            }else{
              j ++
              }


            
        }
        if(minest === 0){
            return ""
        }else{
            return s.substring(ancla, ancla + minest)
        }
    }
}
