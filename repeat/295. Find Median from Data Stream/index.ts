import { MaxHeap, MinHeap } from "@datastructures-js/heap"

class MedianFinder {
    low: MaxHeap<number>
    high: MinHeap<number>

    constructor() {
        this.low = new MaxHeap()
        this.high = new MinHeap()
    }

    addNum(num: number): void {
        this.low.push(num)
        this.high.push(this.low.pop() as number)

        if (this.high.size() > this.low.size()) {
            this.low.push(this.high.pop() as number)
        }
    }

    findMedian(): number {
        const size = this.low.size() + this.high.size()

        if (size % 2 === 0) return ((this.low.top() ?? 0 ) + (this.high.top() ?? 0)) / 2

        return this.low.top() ?? -1
    }
}

// ["MedianFinder","addNum","addNum","addNum","addNum","findMedian"]
// [[], [1], [2], [3], [4], []]

// ["MedianFinder","addNum","addNum","addNum","addNum","addNum","findMedian"]
// [[], [1], [2], [3], [4], [10], []]

// ["MedianFinder","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian"]
// [[], [-1], [], [-2], [], [-3], [], [-4], [], [-5], []]
// [null,null,-1.00000,null,-1.50000,null,-2.00000,null,-2.50000,null,-3.00000]

// [1, 2, 3, 4]
const medianFinder = new MedianFinder()

medianFinder.addNum(1)
medianFinder.addNum(2)
medianFinder.addNum(3)
medianFinder.addNum(4)
medianFinder.addNum(5)

console.log(medianFinder.findMedian())

// medianFinder.addNum(-1)
// medianFinder.addNum(-2)
// medianFinder.addNum(-3)
// medianFinder.addNum(-4)
// medianFinder.addNum(5)

// console.log(medianFinder.findMedian())

