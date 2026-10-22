function findCircleNum(isConnected: number[][]): number {
    const graph = new Map<number, number[]>()

    isConnected.forEach((_, index) => graph.set(index, []))

    for (let i = 0; i < isConnected.length; i++) {
        for (let j = i + 1; j < isConnected[i].length; j++) {
            if (isConnected[i][j]) {
                graph.get(i)?.push(j)
                graph.get(j)?.push(i)
            }
        }
    }

    const visited = new Set<number>()

    let provinces = 0

    for (let i = 0; i < isConnected.length; i++) {
        if (!visited.has(i)) {
            provinces++

            visited.add(i)

            const stack = [i]

            while (stack.length) {
                const vertex = stack.pop() as number

                const neighbors = graph.get(vertex) as number[]

                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor)
                        visited.add(neighbor)
                    }
                }

            }
        }
    }

    return provinces
};

console.log(findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
]))