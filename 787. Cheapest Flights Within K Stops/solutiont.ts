import { MinHeap } from "@datastructures-js/heap"

function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    const graph = new Map<number, [number, number][]>()

    for (let i = 0; i < n; i++) graph.set(i, [])

    for (const [from, to, weight] of flights) {
        graph.get(from)?.push([weight, to])
    }

    const pq = new MinHeap<number[]>(([weight, _node, _count]) => weight, [[0, src, 0]])

    while (pq.size()) {
        const [weight, node, count] = pq.pop()!

        if (count <= k + 1 && node === dst) return weight

        for (const [chWeight, ch] of graph.get(node)!) {
            const nextWeight = weight + chWeight

            if (count <= k && weight < nextWeight) {
                pq.push([nextWeight, ch, count + 1])
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