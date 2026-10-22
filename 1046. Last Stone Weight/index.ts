import { MaxHeap } from "@datastructures-js/heap";

function lastStoneWeight(stones: number[]): number {
    const heap = new MaxHeap(undefined, stones)

    while (heap.size() > 1) { // n
        const y = heap.pop() as number // log n
        const x = heap.pop() as number // log n

        if (x !== y) heap.push(y - x) // log n
    }

    return heap.top() ?? 0
};