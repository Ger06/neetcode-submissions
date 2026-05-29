class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let aux 
        
        let i=0
        while(i<tokens.length){
         
              if(tokens[i] === "+"){
                 aux = Number(tokens[i-2]) + Number(tokens[i-1])
                 tokens.splice(i-2,3,aux)
                 i--
                 continue
                }
              if(tokens[i] === "-"){
                 aux = Number(tokens[i-2]) - Number(tokens[i-1])
                 tokens.splice(i-2,3,aux)
                 i--
                 continue
                }  
              if(tokens[i] === "*"){
                 aux = Number(tokens[i-2]) * Number(tokens[i-1])
                 tokens.splice(i-2,3,aux)
                 i--
                 continue
                }
              if(tokens[i] === "/"){
                 aux = Math.trunc(Number(tokens[i-2]) / Number(tokens[i-1]))
                 tokens.splice(i-2,3,aux)
                 i--
                 continue
                }
              
              i ++


        }
        return tokens[0]
    }
}
