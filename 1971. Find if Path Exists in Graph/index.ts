function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    if (edges.length === 0) return false

    const visited = new Set([source])

    const queue = [source]

    while (queue.length) {
        const key = queue.pop() as number

        for (const toVisit of edges[key]) {
            if (!visited.has(toVisit)) {
                visited.add(toVisit)
                queue.push(toVisit)
            }
        }
    }

    return visited.has(destination)
};

console.log(validPath(6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5))