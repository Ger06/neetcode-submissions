class Solution {
    isAnagram(s, t) {
        if(s.length !== t.length) return false
          let obj={}
  for(let i=0; i<s.length; i++){
    if(obj.hasOwnProperty(s[i])){
      obj[s[i]] +=  1
      }else{
        obj[s[i]] = 1
        }
    }
    for (let j=0; j<t.length; j++){
      if(obj[t[j]] >0){
        obj[t[j]] -= 1
        }else{
          return false
          }
      }
    return Object.values(obj).some(val => val !== "0")
    }
}
