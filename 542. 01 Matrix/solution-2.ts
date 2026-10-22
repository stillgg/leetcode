function updateMatrix(mat: number[][]): number[][] {
    const n = mat[0].length

    const key = (a: number, b: number) => a * n + b

    const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1]   // right
    ]

    const isValid = (row: number, column: number) => (
        (row >= 0 && row < mat.length)
        &&
        (column >= 0 && column < mat[row].length)
    )

    const visited = new Set<number>()

    const queue: [number, number][] = []

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j])
                visited.add(key(i, j))
            }
        }
    }

    let startIndex = 0

    while (startIndex < queue.length) {
        const [r, c] = queue[startIndex]

        for (const [rx, cy] of directions) {
            if (!isValid(r + rx, c + cy) || visited.has(key(r + rx, c + cy))) continue

            mat[r + rx][c + cy] = mat[r][c] + 1

            visited.add(key(r + rx, c + cy))
            queue.push([r + rx, c + cy])
        }

        startIndex++
    }

    return mat
};

// console.log(
//     updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]])
// )

// console.log(
//     updateMatrix([
//         [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
//         [0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
//         [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
//         [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
//         [0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
//         [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
//         [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
//         [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
//         [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
//         [1, 1, 1, 1, 0, 1, 0, 0, 1, 1]
//     ])
// )