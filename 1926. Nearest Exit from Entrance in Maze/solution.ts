function nearestExit(maze: string[][], entrance: number[]): number {
    const WALL = "+"

    const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1],  // right
    ]

    const m = maze.length
    const n = maze[0].length

    const key = (row: number, column: number) => row * n + column

    const queue: number[][] = [entrance.concat([0])]

    const visited = new Set<number>([key(entrance[0], entrance[1])])

    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
            if (maze[i][j] === WALL) visited.add(key(i, j))
        }
    }

    const isValid = (row: number, column: number) => (
        (row >= 0 && row < m)
        &&
        (column >= 0 && column < n)
    )

    const isFinish = (row: number, column: number) => (
        (row === 0 || column === 0 || row === m - 1 || column === n - 1)
    )

    const bfs = () => {
        let startIndex = 0

        while (startIndex < queue.length) {
            const [row, column, depth] = queue[startIndex]

            for (const [dr, dc] of directions) {
                const nr = dr + row
                const nc = dc + column
                const next = depth + 1

                if (!isValid(nr, nc) || visited.has(key(nr, nc))) continue

                if (isFinish(nr, nc)) return next

                visited.add(key(nr, nc))
                queue.push([nr, nc, next])
            }

            startIndex++
        }

        return -1
    }

    return bfs()
};

/*
time complexity O(n * m)
space complexity O(n * m)
*/
