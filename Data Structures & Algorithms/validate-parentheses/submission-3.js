class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let aux = ""

        for(let i=0; i<s.length; i++){
            if(s[i] === "("){
                aux += s[i]
            }
            else if(s[i] === ")"){
                if(aux[aux.length -1] === "("){
                    aux = aux.slice(0,-1)
                }else{
                    return false
                }
            }
            else if(s[i] === "["){
                aux += s[i]
            }
            else if(s[i] === "]"){
                if(aux[aux.length -1] === "["){
                    aux = aux.slice(0,-1)
                }else{
                    return false
                }
            }
            else if(s[i] === "{"){
                aux += s[i]
            }
            else{
                if(aux[aux.length -1] === "{"){
                    aux = aux.slice(0,-1)
                }else{
                    return false
                }
            }
        }
        if(aux.length === 0){
            return true
        }else{
            return false
        }

    }
}
