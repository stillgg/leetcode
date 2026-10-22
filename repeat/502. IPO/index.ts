import { MaxHeap, MinHeap } from "@datastructures-js/heap"
/*
function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
    const collection = profits.map((profit, index) => [profit, capital[index]])

    const heap = new MaxHeap(([profit]) => profit, collection)

    let result = w

    const stack = []

    let i = 0;

    while (i < k) {
        const value = heap.pop()

        if (!value) break

        const [profit, capital] = value

        if (capital <= result) {
            result += profit
            i++

            while (stack.length) {
                heap.push(stack.pop() as [number, number])
            }
        } else {
            stack.push(value)
        }
    }

    return result
};
*/

function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
    const capitalHeap = new MinHeap(
        ([capital]) => capital,
        capital.map((c, index) => [c, profits[index]])
    )

    const profitsHeap = new MaxHeap<number[]>(
        ([, profit]) => profit,
    )

    let result = w

    let i = 0

    while (i < k) {
        while (capitalHeap.size() && (capitalHeap.root() as number[])[0] <= result) {
            profitsHeap.push(capitalHeap.pop() as number[])
        }

        const profitValue = profitsHeap.pop()

        if (!profitValue) break

        result += profitValue[1]
        i++
    }

    return result
}
// time complexity O(n log n)
// space complexity O(n)

// console.log(findMaximizedCapital(10, 0, [1, 2, 3], [0, 1, 2]))

// console.log(findMaximizedCapital(3, 0, [1, 2, 3], [0, 1, 2]))
// console.log(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]))