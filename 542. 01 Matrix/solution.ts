function updateMatrix(mat: number[][]): number[][] {
    const result: number[][] = []

    const n = mat[0].length

    const key = (x: number, y: number) => x * n + y

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

    for (let i = 0; i < mat.length; i++) {
        const row = []

        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 0) {
                row.push(0)
                continue
            }

            const stack: [[number, number], number][] = [
                [[i, j], 0]
            ]

            const visited = new Set<number>()

            visited.add(key(i, j))

            let startIndex = 0

            while (startIndex < stack.length) {
                const [val, deep] = stack[startIndex]!

                if (mat[val[0]][val[1]] === 0) {
                    row.push(deep)
                    break
                }

                for (const [dy, dx] of directions) {
                    if (!isValid(val[0] + dy, val[1] + dx)) continue

                    if (visited.has(key(val[0] + dy, val[1] + dx))) continue

                    visited.add(key(val[0] + dy, val[1] + dx))
                    stack.push([[val[0] + dy, val[1] + dx], deep + 1])
                }

                startIndex++
            }
        }

        result.push(row)
    }

    return result
};

console.log(
    updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]])
)