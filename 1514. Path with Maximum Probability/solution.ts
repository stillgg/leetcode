import { MaxHeap } from "@datastructures-js/heap"

function maxProbability(n: number, edges: number[][], succProb: number[], start_node: number, end_node: number): number {
    const graph = new Map<number, [number, number][]>()

    for (let i = 0; i < n; i++) graph.set(i, [])

    for (let i = 0; i < edges.length; i++) {
        const [a, b] = edges[i]
        graph.get(a)?.push([succProb[i], b])
        graph.get(b)?.push([succProb[i], a])
    }

    const pq = new MaxHeap<[number, number]>(([weight, _vertex]) => weight, [[1, start_node]])

    const best = Array(n).fill(0)
    best[start_node] = 1

    while (pq.size()) {
        const [succ_prob, node] = pq.pop()!

        if (best[node] > succ_prob) continue

        if (node === end_node) return succ_prob

        for (const [ch_succ_prob, ch] of graph.get(node)!) {
            const next_succ_prob = ch_succ_prob * succ_prob

            if (best[ch] >= next_succ_prob) continue

            best[ch] = next_succ_prob
            pq.push([next_succ_prob, ch])
        }
    }

    return best[end_node] === -Infinity ? 0 : best[end_node]
};

console.log(
    maxProbability(
        3,
        [[0, 1], [1, 2], [0, 2]],
        [0.5, 0.5, 0.3],
        0,
        2
    )
)