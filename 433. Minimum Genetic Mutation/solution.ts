function minMutation(startGene: string, endGene: string, bank: string[]): number {
    const bankSet = new Set(bank)

    const visited = new Set([startGene])

    const GENE_CHARS = ['A', 'C', 'G', 'T']

    if (!bankSet.has(endGene)) return -1

    let queue: [string, number][] = [[startGene, 0]]

    while (queue.length) {
        const nextQueue: [string, number][] = []

        for (const [gene, mutationsCount] of queue) {
            if (gene === endGene) return mutationsCount

            for (let i = 0; i < gene.length; i++) {
                for (const char of GENE_CHARS) {
                    if (char === gene[i]) continue

                    const newGene = gene.slice(0, i) + char + gene.slice(i + 1)

                    if (!bankSet.has(newGene) || visited.has(newGene)) continue

                    visited.add(newGene)
                    nextQueue.push([newGene, mutationsCount + 1])
                }
            }
        }

        queue = nextQueue
    }

    return -1
};

/* time complexity O(B * N^2 * C)
    B - bank size <= 10
    N - Gene length
    C - Gene chars
*/

/* space complexity
    O(B * N)
*/