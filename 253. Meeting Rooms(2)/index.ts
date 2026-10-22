import { MinHeap } from "@datastructures-js/heap"

const solution = (schedule: number[][]) => {
    if (schedule.length === 0) return 0

    schedule.sort((a, b) => a[0] - b[0])

    const minHeap = new MinHeap()

    minHeap.push(schedule[0][1]) // кладем конец первого митинга

    for (let i = 1; i < schedule.length; i++) {
        const lastAvailable = minHeap.top() as number

        if (lastAvailable <= schedule[i][0]) { // если есть свободные митинг комнаты
            minHeap.pop()
        }

        minHeap.push(schedule[i][1])
    }


    return minHeap.size()
}