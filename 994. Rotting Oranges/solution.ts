function orangesRotting(grid: number[][]): number {
    const FRESH_ORANGE = 1
    const ROTTEN_ORANGE = 2

    let fresh = 0

    const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1]   // right
    ]

    const queue: [number, number, number][] = [] // [row, column, minites]

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === FRESH_ORANGE) fresh++
            else if (grid[i][j] === ROTTEN_ORANGE) queue.push([i, j, 0])
        }
    }

    if (fresh === 0) return 0

    const isFreshOrange = (row: number, column: number) => (
        (row >= 0 && row < grid.length)
        &&
        (column >= 0 && column < grid[row].length)
        &&
        (grid[row][column] === FRESH_ORANGE)
    )

    let startIndex = 0

    let minutes = 0

    while (startIndex < queue.length) {
        const [r, c, min] = queue[startIndex]

        for (const [dr, dc] of directions) {
            const nr = r + dr
            const nc = c + dc

            if (!isFreshOrange(nr, nc)) continue

            grid[nr][nc] = ROTTEN_ORANGE
            fresh--

            minutes = min + 1

            queue.push([nr, nc, minutes])
        }

        startIndex++
    }

    return fresh === 0 ? minutes : -1
};

console.log(orangesRotting(
    [[2, 1, 1], [1, 1, 0], [0, 1, 1]]
))

// time complexity O(m * n)
// space complexity O(m * n)