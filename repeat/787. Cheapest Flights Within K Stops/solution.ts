import { MinHeap } from "@datastructures-js/heap"

function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    const graph = new Map<number, [number, number][]>()

    for (let i = 0; i < n; i++) graph.set(i, [])

    for (const [from, to, weight] of flights) {
        graph.get(from)?.push([weight, to])
    }

    const pq = new MinHeap<number[]>(([weight, _node, _count]) => weight, [[0, src, 0]])

    const best = Array.from({ length: n }, () => Array(k + 2).fill(Infinity))

    while (pq.size()) {
        const [weight, node, count] = pq.pop()!

        if (count > k + 1) continue

        if (node === dst) return weight

        for (const [chWeight, ch] of graph.get(node)!) {
            const nextWeight = weight + chWeight
            const nextCount = count + 1

            if (best[ch][nextCount] > nextWeight) {
                pq.push([nextWeight, ch, count + 1])
                best[ch][nextCount] = nextWeight
            }
        }
    }

    return -1
};


console.log(findCheapestPrice(
    4,
    [
        [0, 1, 100],
        [0, 2, 500],
        [1, 2, 100],
        [2, 3, 100]
    ],
    0,
    3,
    2
))

/*
Time complexity: O(k * E * log(k * E))

Space complexity: O(n * k + E)
*/