import { MinHeap } from "@datastructures-js/heap";

function networkDelayTime(times: number[][], n: number, k: number): number {
    const graph = new Map<number, [number, number][]>()

    for (let i = 0; i < n; i++) graph.set(i + 1, [])

    for (const [from, to, weight] of times) {
        graph.get(from)?.push([weight, to])
    }

    const distances = Array<number>(n + 1).fill(Infinity)
    distances[k] = 0

    const pq = new MinHeap<number[]>(([d, _v]) => d, [[0, k]])

    while (pq.size()) {
        const [time, vertex] = pq.pop()!

        const neighbors = graph.get(vertex) ?? []

        if (time > distances[vertex]) continue

        for (const [weight, next] of neighbors) {
            const nextTime = time + weight

            if (nextTime < distances[next]) {
                distances[next] = nextTime
                pq.push([nextTime, next])
            }
        }
    }

    let maxTime = 0

    for (let node = 1; node <= n; node++) {
        if (distances[node] === Infinity) return -1
        maxTime = Math.max(maxTime, distances[node])
    }

    return maxTime
};

console.log(
    networkDelayTime(
        [[2, 1, 1], [2, 3, 1], [3, 4, 1]],
        4,
        2
    )
)