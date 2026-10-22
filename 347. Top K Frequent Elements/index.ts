import { MaxHeap } from '@datastructures-js/heap'

function topKFrequent(nums: number[], k: number): number[] {
    const collection = new Map<number, number>()

    nums.forEach((num) => {
        const frequency = collection.get(num) ?? 0

        collection.set(num, frequency + 1)
    })

    const maxHeap = new MaxHeap(
        ([, frequency]) => frequency,
        Array.from(collection)
    )

    const result = []

    for (let i = 0; i < k; i++) {
        const val = maxHeap.pop()
        if (val !== undefined && val !== null) result.push(val[0])
    }

    return result
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))