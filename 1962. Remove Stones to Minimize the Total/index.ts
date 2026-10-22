import { MaxHeap } from "@datastructures-js/heap"

function minStoneSum(piles: number[], k: number): number {
    // сделаем maxHeap
    // сделаем maxHeap.pop() и положим обратно в heap
    // делаем это k раз
    let result = 0
    const maxHeap = new MaxHeap(undefined, piles)

    for (let i = 0; i < k; i++) {
        const pile = maxHeap.pop()!
        const newPile = pile - Math.floor(pile / 2)

        maxHeap.push(newPile)
    }

    for (const pile of maxHeap) {
        result += pile
    }

    return result
};


minStoneSum([5, 4, 9], 2)