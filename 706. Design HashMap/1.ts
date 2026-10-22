// chaining linkedLists
const primeNumber = 977

const hash = (key: number) => key % primeNumber

interface ListNodeV2 {
    value: number
    key?: number
    next: ListNodeV2 | null
}

class MyListNode {
    value: number
    key?: number
    next: ListNodeV2 | null

    constructor(value: number, key?: number, next?: ListNodeV2 | null ) {
        this.value = value
        this.key = key
        this.next = next ?? null
    }
}

class MyLinkedList {
    dummyHead: ListNodeV2
    size: number

    constructor() {
        this.dummyHead = new MyListNode(-1)
        this.size = 0
    }

    addFirst(key: number, value: number) {
        this.insertAtIndex(0, key, value)
    }

    findNode(key: number): ListNodeV2 | null {
        let current = this.dummyHead.next

        while (current) {
            if (current.key === key) return current

            current = current.next
        }

        return null
    }

    get(key: number): number {
        return this.findNode(key)?.value ?? -1
    }
    
    addLast(key: number, value: number) {
        this.insertAtIndex(this.size, key, value)
    }

    remove(key: number) {
        let prev = this.dummyHead
        let current = this.dummyHead.next

        while (current) {
            if (current.key === key) {
                prev.next = current?.next ?? null
                this.size--
                return
            }
            prev = current
            current = current.next
        }

        return
    }
    
    insertAtIndex(index: number, key: number, value: number ) {
        let current = this.dummyHead as ListNodeV2 | null

        for (let i = 0; i < index; i++) {
            current = current?.next ?? null
        }

        const next = current?.next ?? null

        if (current) current.next = new MyListNode(value, key, next)

        this.size++
    }
}

class MyHashMap {
    buckets: MyLinkedList[]

    constructor() {
        this.buckets = (new Array(1000).fill(0).map(() => new MyLinkedList()))
    }

    put(key: number, value: number): void {
        const node = this.buckets[hash(key)].findNode(key)
        if (node) node.value = value
        else this.buckets[hash(key)].addLast(key, value)
    }

    get(key: number): number {
        return this.buckets[hash(key)].get(key)
    }

    remove(key: number): void {
        this.buckets[hash(key)].remove(key)
    }
}

const obj = new MyHashMap()

obj.put(1, 1)
obj.put(1, 2)

obj.remove(1)
// obj.put(1, 3)
console.log(obj.buckets[1])

// console.log(obj.buckets[0])

// console.log(JSON.stringify(obj.buckets[0].dummyHead, null, 3))

// console.log(obj.get(1))


/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */