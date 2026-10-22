
type Edge = 'blue' | 'red'

interface Neighbor {
    key: string
    type: Edge
    val: number
}

function shortestAlternatingPaths(n: number, redEdges: number[][], blueEdges: number[][]): number[] {
    const graph = new Map<number, Neighbor[]>()

    const result = new Array(n).fill(-1)
    result[0] = 0

    const key = (a: number, b: number, edge: Edge) => (`${edge}-${a}-${b}`)

    for (let i = 0; i < n; i++) graph.set(i, [])

    for (const [a, b] of redEdges) graph.get(a)?.push({ type: 'red', val: b, key: key(a, b, 'red') })

    for (const [u, v] of blueEdges) graph.get(u)?.push({ type: 'blue', val: v, key: key(u, v, 'blue') })

    const bfs = (edge: Edge) => {
        const queue: [number, Edge, number][] = [[0, edge, 0]]

        const visited = new Set<string>()

        visited.add(key(0, 0, edge))

        let startIndex = 0

        while (startIndex < queue.length) {
            const val = queue[startIndex]

            const neighbors = graph.get(val[0]) ?? []

            for (const neighbor of neighbors) {
                const nextColor = val[1]

                if (visited.has(neighbor.key) || nextColor !== neighbor.type) continue

                if (result[neighbor.val] === -1) {
                    result[neighbor.val] = val[2] + 1
                }
                else {
                    result[neighbor.val] = Math.min(result[neighbor.val], val[2] + 1)
                }

                queue.push([neighbor.val, nextColor === 'blue' ? 'red' : 'blue', val[2] + 1])
                visited.add(neighbor.key)
            }

            startIndex++
        }
    }

    bfs('blue')
    bfs('red')

    return result
};


// console.log(shortestAlternatingPaths(3,
//     [[2, 1]],
//     [[0, 2]]
// ))

// console.log(shortestAlternatingPaths(5,
//     [[0, 1], [1, 2], [2, 3], [3, 4]],
//     [[1, 2], [2, 3], [3, 1]]
// ))

// console.log(
//     shortestAlternatingPaths(6,
//         [[1, 5], [2, 2], [5, 5], [3, 0], [4, 5], [2, 4], [4, 1], [1, 0], [1, 2], [5, 2], [2, 3], [0, 1]],
//         [[4, 4], [2, 5], [1, 1], [5, 4], [3, 3]]
//     ))

console.log(
    shortestAlternatingPaths(6,
        [[3, 4], [1, 5], [1, 0], [5, 3], [2, 1], [2, 0], [0, 3], [1, 2], [5, 2], [1, 4], [1, 3], [5, 0], [4, 5], [5, 5], [3, 3]],
        [[2, 5], [3, 0], [1, 2], [4, 3], [3, 4], [0, 4], [5, 0], [5, 2], [1, 0], [0, 2]]
    ))