const merge = (intervals: [number, number][]) => {
    intervals.sort((a, b) => a[0] - b[0])

    const merged = [intervals[0]]

    for (let i = 0; i < intervals.length; i++) {
        const current = intervals[i]
        const prev = merged[merged.length - 1]

        if (current[0] <= prev[1]) {
            merged[merged.length - 1] = [prev[0], current[1]]
        }
        else {
            merged.push(current)
        }
    }

    return merged
}