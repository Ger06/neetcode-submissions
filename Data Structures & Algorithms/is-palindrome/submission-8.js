class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
  const split = s.split('')
  console.log(split)
  
  let i= 0
  let j= split.length -1
  
  while(i<j){
    let invalid = new Set (['?' , ' ' , ',' , '.',"'",':',';'])
    while(invalid.has(split[i])){
      if(i<j){
      i++
      }else if(i === j){
        return true
        }else{
        return false
        }
    }
    while(invalid.has(split[j])) {
      if(i<j){
      j--
      }else if(i === j){
        return true
        }else{
        return false
        }
    }
    
    if(split[i].toLowerCase() === split[j].toLowerCase()){
      i++
      j--
      }else{
        return false}
    }
    return true
    }
}
