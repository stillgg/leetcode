function minReorder(n: number, connections: number[][]): number {
    const originalConnections = new Set<number>()

    const graph = new Map<number, number[]>()

    const key = (a: number, b: number) => a * n + b

    for (let i = 0; i < n; i++) graph.set(i, [])

    for (const [a, b] of connections) {
        graph.get(a)?.push(b)
        graph.get(b)?.push(a)

        originalConnections.add(key(a, b))
    }

    const stack = [0]

    let result = 0

    const visited = new Set([0])

    while (stack.length) {
        const val = stack.pop() as number

        const neighbors = graph.get(val) ?? []

        for (const neighbor of neighbors) {
            if (visited.has(neighbor)) continue

            if (originalConnections.has(key(val, neighbor))) result++

            visited.add(neighbor)
            stack.push(neighbor)
        }
    }

    return result
};

console.log(minReorder(6, [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]]))