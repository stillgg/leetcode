import { LinkedList, ListNode } from "../common/linkedList.ts"

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head) return null

    const dummyHead = new ListNode()

    dummyHead.next = head

    let i = 0;
    let slow = dummyHead 
    let fast = dummyHead

    while (fast.next) {
        if (n > i) {
            fast = fast.next
            i++
        } else {
            slow = slow.next as ListNode
            fast = fast.next
        }
    }

    if (slow) slow.next = slow.next?.next ?? null

    return dummyHead.next
};

// const linkedList = LinkedList.fromArray([1, 2, 3])
// const linkedList = LinkedList.fromArray([1, 2])

console.log(removeNthFromEnd(linkedList, 2))