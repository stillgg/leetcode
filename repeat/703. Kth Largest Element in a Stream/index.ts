// import { MaxHeap } from "../common/maxHeap.ts"
import { MaxHeap } from '@datastructures-js/heap'
// import { MinHeap } from "@datastructures-js/heap"

class KthLargest {
    heap: MaxHeap<number>
    k: number

    constructor(k: number, nums: number[]) {
        this.heap = new MaxHeap(undefined, nums)
        this.k = k
    }

    add(val: number): number {
        const poped = []

        this.heap.push(val)

        for (let i = 0; i < this.k - 1; i++) {
            const val = this.heap.pop()
            if (val !== null) poped.push(val)
        }

        const result = this.heap.top() ?? -1

        poped.forEach((val) => this.heap.push(val))

        return result
    }
}

const kthLargest = new KthLargest(3, [4, 5, 8, 2])

console.log(kthLargest.add(3)) // return 4
console.log(kthLargest.add(5)) // return 5
console.log(kthLargest.add(10)) // return 5
console.log(kthLargest.add(9)) // return 8
console.log(kthLargest.add(4)) // return 8