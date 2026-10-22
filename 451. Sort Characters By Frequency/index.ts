import { MaxHeap } from "@datastructures-js/heap"

function frequencySort(s: string): string {
    const map = new Map()

    for (const char of s) {
        const frequency = map.get(char) ?? 0

        map.set(char, frequency + 1)
    }

    const heap = new MaxHeap(
        ([, frequency]) => frequency,
        Array.from(map),
    )

    const result = []

    while (heap.size()) {
        const val = heap.pop()

        let str = ''

        if (val) {
            const [char, frequency] = val

            for (let i = 0; i < frequency; i++) {
                str += char
            }


            result.push(str)
        }
    }

    return result.join('')
};

console.log(frequencySort('abaccadeeefaafcc'))