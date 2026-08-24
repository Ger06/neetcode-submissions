class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
      let cleanS = s.toLocaleLowerCase().replace(/[^a-z0-9]/g,"")
      let splitS = cleanS.split("")
      let left = 0
      let right = cleanS.length -1

      while(left < right){
        if(splitS[left] === splitS[right]){
          left ++
          right --
        }else{
          return false
        }
      }
      return true
    }
}
