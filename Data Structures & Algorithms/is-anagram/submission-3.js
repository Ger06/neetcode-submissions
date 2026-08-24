class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      if(s.length !== t.length){
        return false
      }

      const sToArray = s.split('')
      const sOrder = sToArray.sort((a,b) => a.localeCompare(b))
      const sString = sOrder.join('')

      const tToArray = t.split('')
      const tOrder = tToArray.sort((a,b) => a.localeCompare(b))
      const tString = tOrder.join('')

      return sString === tString
    }
}
