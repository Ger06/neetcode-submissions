/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if(!head) return false
        const auxSet = new Set()
        let curr = head
        while(curr.next){
            if(auxSet.has(curr.val)){
                return true
            }else{
                auxSet.add(curr.val)
                curr = curr.next
            }
        }
        return false
    }
}
