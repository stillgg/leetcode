export class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export class LinkedList {
    dummyHead: ListNode
    tail: ListNode
    size: number

    constructor() {
        this.dummyHead = new ListNode()
        this.tail = new ListNode()
        this.dummyHead.next = this.tail

        this.size = 0
    }

    insertAtIndex(index: number, val: number) {
        if (index < 0 || index > this.size) return

        let current = this.dummyHead as ListNode

        while (index > 0) {
            current = current.next as ListNode
            index--
        }

        const newNode = new ListNode(val, current.next)
        current.next = newNode

        this.size++
    }

    removeAtIndex(index: number) {
        if (index < 0 || index + 1 > this.size) return

        let current = this.dummyHead as ListNode

        while (index > 0) {
            current = current.next as ListNode
            index--
        }

        current.next = (current.next as ListNode).next
        this.size--
    }

    static fromArray(array: number[]) {
        const dummyHead =  new ListNode()

        let current = dummyHead

        array.forEach((val, index) => {
            const newNode = new ListNode(val)
            current.next = newNode
            current = newNode
        })

        return dummyHead.next
    }
}

// const linkedList = new LinkedList()

// linkedList.insertAtIndex(0, 1)
// linkedList.insertAtIndex(1, 2)

// linkedList.removeAtIndex(1)
// linkedList.removeAtIndex(2)
// linkedList.removeAtIndex(2)


// const linkedList = LinkedList.fromArray([1, 2, 3, 4])

// console.log('linkedList - ', JSON.stringify(linkedList, null, 2 ))
// console.log('linkedList - ', JSON.stringify(linkedList, null, 2))