class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let ans = new Set()
        let sortPos = [...position]
        sortPos.sort((a,b)=> b-a)
        for(let i =0; i<position.length; i++){
            let val = position.findIndex(e=> e === sortPos[i])
            if(ans.size === 0){
                ans.add((target - position[val])/speed[val])
            }else{
                let time = (target - position[val])/speed[val]
                if(time > Math.max(...ans.values())){
                    ans.add(time)
                }
            }
            
        }
        return ans.size
    }
}
