
function numIslands(grid: string[][]): number {
    // построим граф в виде хеш мапы
    // обойдем dfs на каждой ноде и посчитаем сколько раз пришлось запустить dfs, элементы которые посещались пометим чтобы повторно не запускать dfs

    const graph = new Map<string, string[]>()

    const key = (x: number, y: number) => `${x}-${y}`

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '0') continue // если вода пропускаем

            const currentKey = key(i, j)
            graph.set(currentKey, [])

            if (grid[i - 1] && grid[i - 1][j] === '1') { // проверим есть ли сосед сверху, установим связи
                const topKey = key(i - 1, j)

                graph.get(currentKey)?.push(topKey)
                graph.get(topKey)?.push(currentKey)
            }

            if (grid[i][j - 1] === '1') { // проверим есть ли сосед слева, установим связи
                const leftKey = key(i, j - 1)

                graph.get(currentKey)?.push(leftKey)
                graph.get(leftKey)?.push(currentKey)
            }
        }
    }

    let result = 0
    const visited = new Set()

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '0') continue
            if (visited.has(key(i, j))) continue

            const queue = [key(i, j)]
            result++

            while (queue.length) {
                const val = queue.pop() as string
                visited.add(val)

                const neighbors = graph.get(val) ?? []

                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor)
                        visited.add(neighbor)
                    }
                }
            }
        }
    }
    // time complexiy (n * m)
    // space complexity (n * m)

    return result
};