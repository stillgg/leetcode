interface IMyListNode {
    val: number
    prev: MyListNode | null
    next: MyListNode | null
}

class MyListNode {
    val: number
    prev: MyListNode | null
    next: MyListNode | null

    constructor(val: number, prev?: MyListNode | null, next?: MyListNode | null) {
        this.val = val
        this.prev = prev ?? null
        this.next = next ?? null
    }
}

interface IMyQueue {
    dummyHead: IMyListNode
    dummyTail: IMyListNode
    size: number
}

class MyQueue implements IMyQueue {
    dummyHead: IMyListNode
    dummyTail: IMyListNode
    size: number

    constructor() {
        const dummyHead = new MyListNode(-1) as IMyListNode
        this.dummyHead = dummyHead
        this.dummyTail = new MyListNode(-1, dummyHead, null)
        this.dummyHead.next = this.dummyTail
        this.size = 0
    }

    removeNode(node: IMyListNode) {
        if (!node.next || !node.prev) return

        node.next.prev = node.prev
        node.prev.next = node.next
        this.size--
    }

    getFirst() {
        return this.dummyHead.next?.val
    }

    shift() {
        if (this.dummyHead.next) this.removeNode(this.dummyHead.next)
    }

    pop() {
        if (this.dummyTail.prev) this.removeNode(this.dummyTail.prev)
    }

    append(v: number) {
        const node = new MyListNode(v, this.dummyTail.prev, this.dummyTail)

        if (this.dummyTail.prev) this.dummyTail.prev.next = node
        this.dummyTail.prev = node
        this.size++
    }
}

const timeout = 3000

class RecentCounter {
    requests: MyQueue

    constructor() {
        this.requests = new MyQueue()
    }

    ping(t: number): number {
        this.requests.append(t)

        let first = this.requests.getFirst()

        while (first && t - timeout > first) {
            this.requests.shift()
            first = this.requests.getFirst()
        }


        return this.requests.size
    }
}
const obj = new RecentCounter()

console.log(obj.ping(1))
console.log(obj.ping(100))
console.log(obj.ping(3001))
console.log(obj.ping(3002))
console.log(obj.ping(3003))
console.log(obj.ping(5000))
console.log(obj.ping(80000))



// console.log(obj)
/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */