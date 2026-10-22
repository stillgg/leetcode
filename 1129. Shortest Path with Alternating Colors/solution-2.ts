function shortestAlternatingPaths(n: number, redEdges: number[][], blueEdges: number[][]): number[] {
    const RED = 0
    const BLUE = 1

    const result: number[] = new Array(n).fill(-1)
    result[0] = 0

    const redGraph = new Map<number, number[]>()

    const blueGraph = new Map<number, number[]>()

    for (let i = 0; i < n; i++) {
        redGraph.set(i, [])
        blueGraph.set(i, [])
    }

    for (const [a, b] of redEdges) redGraph.get(a)?.push(b)

    for (const [a, b] of blueEdges) blueGraph.get(a)?.push(b)

    const bfs = () => {
        const queue = [[0, RED, 0], [0, BLUE, 0]]

        const redVisited = new Set([0])
        const blueVisited = new Set([0])

        let startIndex = 0

        while (startIndex < queue.length) {
            const [node, color, depth] = queue[startIndex]

            const neighbors = color === RED ? redGraph.get(node) : blueGraph.get(node)

            for (const neighbor of neighbors ?? []) {
                const visited = color === RED ? redVisited : blueVisited

                if (visited.has(neighbor)) continue

                visited.add(neighbor)

                const next = depth + 1

                result[neighbor] = result[neighbor] === -1 ? next : Math.min(result[neighbor], next)

                queue.push([neighbor, color === RED ? BLUE : RED, depth + 1])
            }

            startIndex++
        }
    }

    bfs()

    return result
};

/*
time complexity O(n + r + b)
space complexity O(n + r + b)
*/

// console.log(shortestAlternatingPaths(3,
//     [[2, 1]],
//     [[0, 2]]
// ))

console.log(shortestAlternatingPaths(4,
    [[0, 0], [3, 3], [3, 1]],
    [[1, 0], [0, 3], [3, 2]]
))