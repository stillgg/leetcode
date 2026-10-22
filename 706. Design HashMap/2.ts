// chaining arrays
const prime = 977

const hashKey = (key: number) => key % prime

class MyHashMapV2 {
    buckets: [number, number][][]

    constructor() {
        this.buckets = new Array(1000).fill(0).map(() => [])
    }

    put(key: number, value: number): void {
        const bucket = this.buckets[hashKey(key)]

        for (const pair of bucket) {
            if (pair[0] === key) {
                pair[1] = value
                return
            }
        }

        bucket.push([key, value])
    }

    get(key: number): number {
        for (const pair of this.buckets[hashKey(key)]) {
            if (pair[0] === key) return pair[1]
        }

        return -1
    }

    remove(key: number): void {
        const bucket = this.buckets[hashKey(key)]
        const index = bucket.findIndex((pair) => pair[0] === key)
        if (index >= 0) bucket.splice(index, 1)
    }
}

const hashMap = new MyHashMapV2()

hashMap.put(1, 1)
hashMap.put(1, 2)
hashMap.remove(1)

// hashMap.hashMap[0]

console.log(hashMap.buckets[0])
