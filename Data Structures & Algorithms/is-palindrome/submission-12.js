class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
      let normalize = s.trim().toLowerCase().replace(/[^a-z0-9]/g,"")

      let l = 0
      let r = normalize.length -1

      while(l < r){
        if(normalize[l] === normalize[r]){
          l ++
          r--
        }else{
          return false
        }
      }
      return true
    }
}
