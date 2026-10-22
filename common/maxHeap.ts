export class MaxHeap {
    private heap: number[]

    constructor(values?: number[]) {
        this.heap = values ? [...values] : []
    }

    get size(): number {
        return this.heap.length
    }

    get values(): number[] {
        return this.heap
    }

    isEmpty(): boolean {
        return this.size === 0
    }

    peek(): number | undefined {
        return this.heap[0]
    }

    push(val: number): void {
        this.heap.push(val)
        this.heapifyUp(this.heap.length - 1)
    }

    pop(): number | undefined {
        this.swap(0, this.size - 1)

        const val = this.heap.pop()

        if (!this.isEmpty()) this.heapifyDown(0)

        return val
    }

    buildHeap(): MaxHeap {
        const array = this.heap
        const len = array.length

        for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i)
        }

        return this
    }

    private parentIndex(index: number): number {
        return Math.floor((index - 1) / 2)
    }

    private leftChildIndex(index: number): number {
        return index * 2 + 1
    }

    private rightChildIndex(index: number): number {
        return index * 2 + 2
    }

    private swap(i: number, j: number): void {
        ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    private heapifyUp(index: number): void {
        // для метода push
        const heap = this.heap
        let current = index

        while (current > 0) {
            const parent = this.parentIndex(current)

            if (heap[parent] >= heap[current]) break

            this.swap(parent, current)

            current = parent
        }
    }

    private heapifyDown(index: number): void {
        let current = index
        const heap = this.heap
        const len = heap.length

        while (true) {
            let max = current
            const left = this.leftChildIndex(current)
            const right = this.rightChildIndex(current)

            if (left < len && heap[left] > heap[max]) {
                max = left
            }
            
            if (right < len && heap[right] > heap[max]) {
                max = right
            }

            if (current === max) break

            this.swap(max, current)
            current = max
        }
    }
}

// export class MinHeap {
// }

// const minHeap = new MinHeap([3, 1, 4])

// console.log(maxHeap.buildHeap())
// maxHeap.push(3)
// maxHeap.push(1)
// maxHeap.push(4)

// maxHeap.buildHeap()

// console.log(maxHeap)
//
// console.log(maxHeap.peek()) // 4
// console.log(maxHeap.pop())  // 4
// console.log(maxHeap.pop())  // 3
