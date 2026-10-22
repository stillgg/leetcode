function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
    const vertexs = new Array(n).fill(0).map((val, index) => [val, index])

    for (const edge of edges) {
        vertexs[edge[1]][0]++
    }

    return vertexs
        .filter(([val, index]) => val === 0)
        .map(([val, index]) => index)
};