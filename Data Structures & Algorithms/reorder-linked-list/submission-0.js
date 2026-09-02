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
     * @return {void}
     */
    reorderList(head) {
        let slow = head
        let fast = head.next
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        let secondPart = slow.next
        slow.next = null
        let prev = null
        while(secondPart){
            let nxt = secondPart.next
            secondPart.next = prev
            prev = secondPart
            secondPart = nxt
        }

        let auxOne = head
        let auxTwo = prev

        while(auxTwo){
            let [tmp1, tmp2] = [auxOne.next, auxTwo.next]
            auxOne.next = auxTwo
            auxTwo.next = tmp1
            auxOne = tmp1
            auxTwo = tmp2
        }

    }
}
