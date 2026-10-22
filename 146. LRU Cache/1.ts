interface IListNode {
    key: number
    value: number
    prev: IListNode | null
    next: IListNode | null
}

export class MyListNodeV2 implements IListNode {
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
    first: IListNode | null
    current: IListNode | null
    capacity: number
}

class LRUCache implements ILRUCache {
    cache: Map<number, IListNode>
    first: IListNode | null
    current: IListNode | null
    capacity: number

    constructor(capacity: number) {
        this.cache = new Map()
        this.first = null
        this.current = null
        this.capacity = capacity
    }

    get(key: number): number {
        const node = this.cache.get(key)

        return node?.value ?? -1
    }

    put(key: number, value: number): void {
        const first = this.first
        const current = this.current
        const size = this.cache.size

        if (first === null) {
            const node = new MyListNodeV2(key, value)
            this.first = node
            this.current = node

            this.cache.set(key, node)
        } else if (size >= this.capacity) {
            const node = new MyListNodeV2(key, value, current, first.next)

            if (current) current.next = node

            this.cache.set(key, node)
            first.prev = node

            this.first = first.next
            this.current = node

            this.cache.delete(first.key)
        } else {
            const node = new MyListNodeV2(key, value, current, current?.next)

            if (current) current.next = node

            this.current = node

            if (this.cache.has(key)) this.cache.delete(key)
            else this.cache.set(key, node)
        }
    }
}

const obj = new LRUCache(2)

obj.put(1, 1)
obj.put(2, 2)
obj.put(3, 3)

// obj.get(2)

// obj.put(1, 1)
// obj.put(2, 2)
// obj.put(3, 3)
// obj.put(4, 4)
// obj.put(5, 5)
// obj.put(6, 6)
// obj.put(7, 7)
// obj.put(8, 8)



console.log(obj)


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */