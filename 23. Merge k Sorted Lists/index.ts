import { MinHeap } from "@datastructures-js/heap"
import { LinkedList, ListNode } from "../common/linkedList.ts"

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const flatList = lists.flatMap((node) => {
        const list = []

        let current = node

        while (current) {
            list.push(current)
            current = current.next
        }

        list.forEach(node => node.next = null)

        return list
    })

    const minHeap = new MinHeap((node) => node?.val ?? 0, flatList)
    const head = minHeap.pop()

    if (!head) return null

    let current: ListNode | null = head

    while (minHeap.size()) {
        const node = minHeap.pop()

        current!.next = node
        current = node
    }

    return head
};

// const lists = [
//     LinkedList.fromArray([1, 4, 5]),
//     LinkedList.fromArray([1, 3, 4]),
//     LinkedList.fromArray([2, 6])
// ]
const lists = [
    LinkedList.fromArray([-2, -1, -1, -1]),
    LinkedList.fromArray([])
]

mergeKLists(lists)