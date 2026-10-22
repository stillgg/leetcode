// Решение с заменой на месте dfs

function numIslands(grid: string[][]): number {
    let islands = 0

    const WATER = '0'
    const ISLAND = '1'

    const dirs = [
        [-1, 0], // up
        [1, 0], // down
        [0, -1], // left
        [0, 1] // right
    ]

    const isIsland = (x: number, y: number) => (
        (y >= 0 && y < grid.length)
        &&
        (x >= 0 && x < grid[y].length)
        &&
        grid[y][x] === ISLAND
    )

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === WATER) continue

            islands++
            grid[i][j] = WATER

            const stack: [number, number][] = [[i, j]]

            while (stack.length) {
                const [y, x] = stack.pop()!

                for (const [dy, dx] of dirs) {
                    if (isIsland(x + dx, y + dy)) {
                        stack.push([y + dy, x + dx])
                        grid[y + dy][x + dx] = WATER
                    }
                }
            }
        }
    }

    return islands
}