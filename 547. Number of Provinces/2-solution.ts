function findCircleNum(isConnected: number[][]): number {
    const visited = new Set<number>()

    let provinces = 0

    for (let i = 0; i < isConnected.length; i++) {
        if (!visited.has(i)) {
            provinces++

            visited.add(i)

            const stack = [i]

            while (stack.length) {
                const vertex = stack.pop() as number

                const neighbors = isConnected[vertex]

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