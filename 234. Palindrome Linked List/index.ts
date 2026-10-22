import { LinkedList, ListNode } from "../../common/linkedList.ts"

function reverse(head: ListNode | null) {
    if (!head) return null

    let prev = null
    let current = head as ListNode | null

    while (current) {
        let tmp = current.next

        current.next = prev
        prev = current
        current = tmp
    }

    return prev
}

function findMiddle(head: ListNode) {
    let slow = head as ListNode | null
    let fast = head as ListNode | null
 
    while (fast?.next) {
        slow = (slow as ListNode).next
        fast = fast.next.next ?? null
    }

    return slow
}

function isPalindrome(head: ListNode | null): boolean {
    if (!head) return true

    const middle = findMiddle(head)

    let p1 = head as ListNode | null
    let p2 = reverse(middle)

    while (p1 && p2) {
        if (p1.val !== p2.val) return false

        p1 = p1.next
        p2 = p2.next
    }

    return true
};

const linkedList1 = LinkedList.fromArray([1, 2, 1, 2]) // false
// const linkedList2 = LinkedList.fromArray([1, 2, 2, 1]) // true
// const linkedList3 = LinkedList.fromArray([1, 0, 1]) // true


// console.log('linkedList - ', linkedList)
console.log(isPalindrome(linkedList1))
// console.log(isPalindrome(linkedList2))
// console.log(isPalindrome(linkedList3))



