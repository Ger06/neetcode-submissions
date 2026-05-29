class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let aux = []

        let i = 0
        let r = 1
        while(i<temperatures.length){
          
            while(r<temperatures.length){
                
                if(temperatures[r] > temperatures[i]){
                    aux[i] = r - i
                    break
                }else{
                    r ++
                }
                if(r === temperatures.length){
                  aux[i] = 0
                  }
            }
            i ++
            r = i + 1
            if(i === temperatures.length -1){
                    aux[i] = 0
                    break
                }
        }
        return aux
    }
}
