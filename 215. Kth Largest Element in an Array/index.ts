// import { MaxHeap } from "../common/maxHeap.ts"
import { MinHeap } from "../common/minHeap.ts"


function findKthLargest(nums: number[], k: number): number {
    const minHeap = new MinHeap()

    for (const num of nums) {
        minHeap.push(num)
        if (minHeap.size > k) minHeap.pop()
    }

    return minHeap.peek() ?? -1
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))

