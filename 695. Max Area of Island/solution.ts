function maxAreaOfIsland(grid: number[][]): number {
    const ISLAND = 1
    const WATER = 0

    const directions = [
        [0, -1], // left
        [0, 1],  // right
        [-1, 0], // top
        [1, 0],  // bottom
    ]

    const isIsland = (row: number, column: number) => (
        (row >= 0 && row < grid.length)
        &&
        (column >= 0 && column < grid[row].length)
        &&
        grid[row][column] === ISLAND
    )

    let maxArea = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === WATER) continue

            let area = 0
            grid[i][j] = WATER

            const stack: [number, number][] = [[i, j]]

            while (stack.length) {
                const [r, c] = stack.pop()!

                area++
                for (const [rx, cy] of directions) {
                    if (!isIsland(r + rx, c + cy)) continue

                    stack.push([r + rx, c + cy])
                    grid[r + rx][c + cy] = WATER
                }
            }

            maxArea = Math.max(maxArea, area)
        }
    }

    return maxArea
};

maxAreaOfIsland([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1]
])

// maxAreaOfIsland([
//     [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
//     [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
// ])