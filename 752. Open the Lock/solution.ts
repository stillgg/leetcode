function openLock(deadends: string[], target: string): number {
    const visited = new Set(deadends)

    if (visited.has("0000")) return -1

    visited.add("0000")

    let queue: [string, number][] = [["0000", 0]]

    const rollUp = (n: number) => (n + 1) % 10

    const rollDown = (n: number) => (n - 1 + 10) % 10

    while (queue.length) {
        const nextQueue: [string, number][] = []

        for (const [lock, turns] of queue) {
            if (lock === target) return turns

            for (let i = 0; i < lock.length; i++) {
                for (const roll of [rollDown, rollUp]) {
                    const n = lock.slice(0, i) + roll(+lock[i]) + lock.slice(i + 1)

                    if (visited.has(n)) continue

                    visited.add(n)
                    nextQueue.push([n, turns + 1])
                }
            }
        }

        queue = nextQueue
    }

    return -1
};

/*
    time complexity O(V * N^2 * K)

    V - total possible combinations for 4 numbers is 10000
    N - total numbers for this problem is 4, N^2 because we slice the string for each number
    K - 2 combinations for one turn (+1, -1)
*/

/*
    space complexity O(V)
*/

console.log(
    openLock(["0201", "0101", "0102", "1212", "2002"], "0202")
)