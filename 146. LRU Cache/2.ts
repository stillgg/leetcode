interface IListNode {
    key: number
    value: number
    prev: IListNode | null
    next: IListNode | null
}

class MyListNode implements IListNode {
    key: number
    value: number
    prev: IListNode | null
    next: IListNode | null

    constructor(key: number, value: number, prev?: IListNode | null, next?: IListNode | null) {
        this.key = key
        this.value = value
        this.prev = prev ?? null
        this.next = next ?? null
    }
}

interface ILRUCache {
    cache: Map<number, IListNode>
    head: IListNode | null
    tail: IListNode | null
    capacity: number
}

class LRUCache implements ILRUCache {
    cache: Map<number, IListNode>
    head: IListNode
    tail: IListNode
    capacity: number

    constructor(capacity: number) {
        this.cache = new Map()
        const tail = new MyListNode(-1, -1)

        this.head = new MyListNode(-1, -1, null, tail)
        tail.prev = this.head
        this.tail = tail

        this.capacity = capacity
    }

    get(key: number): number {
        const node = this.cache.get(key)

        if (!node) return -1

        this.addToHead(node)

        return node.value
    }

    remove(node: IListNode) {
        node.prev.next = node.next
        node.next.prev = node.prev
    }

    addToHead(node: IListNode) {
        node.prev = this.head
        node.next = this.head.next

        this.head.next.prev = node
        this.head.next = node
    }

    put(key: number, value: number): void {
        const node = this.cache.get(key)

        if (node) {
            this.remove(node)
            this.addToHead(node)
            node.value = value
        }
        else {
            const current = new MyListNode(key, value)

            this.addToHead(current)
            this.cache.set(key, current)

            if (this.cache.size > this.capacity) {
                this.remove(this.tail.prev)
                this.cache.delete(this.tail.prev?.key)
            }
        }
    }
}

const obj = new LRUCache(2)

obj.put(1, 1)
obj.put(2, 2)
// obj.put(1, 1)
obj.put(3, 3)
// obj.put(2, 2)

// console.log(obj.get('2'))
console.log(obj.cache)