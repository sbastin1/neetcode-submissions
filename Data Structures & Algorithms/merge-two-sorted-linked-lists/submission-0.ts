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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if (!list1 || !list2) {
            return list1 ? list1 : list2
        }

        let head = list2.val < list1.val ? list2 : list1
        let remaining = list2.val < list1.val ? list1 : list2

        let curr = head

        while (remaining !== null) {
            if (curr.next === null) {
                curr.next = remaining
                break
            }

            if (curr.val <= remaining.val && remaining.val <= curr.next.val) {
                const nextRemaining = remaining.next

                remaining.next = curr.next
                curr.next = remaining

                remaining = nextRemaining
                curr = curr.next
            } else {
                curr = curr.next
            }
        }

        return head 
    }
}
