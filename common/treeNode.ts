export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }

    static arrayToTree(array: (number | null)[]): TreeNode | null {
        const firstEl = array[0]

        if (firstEl === null) return null

        const copy: (number | null | TreeNode)[] = [...array]
        const len = array.length

        copy.forEach((val, index) => {
            if (val === null) return

            const leftIndex = index * 2 + 1
            const rightIndex = index * 2 + 2

            const leftVal = copy[leftIndex] instanceof TreeNode ? copy[leftIndex].val : (copy[leftIndex] ?? null)
            const rightVal = copy[rightIndex] instanceof TreeNode ? copy[rightIndex].val : (copy[rightIndex] ?? null)

            const left = leftVal !== null ? new TreeNode(leftVal) : null
            const right = rightVal !== null ? new TreeNode(rightVal) : null

            copy[leftIndex] = left
            copy[rightIndex] = right

            if (val instanceof TreeNode) {
                copy[index] = val

                if (leftIndex > len - 1) return
                if (rightIndex > len - 1) return

                val.left = left
                val.right = right
            }
            else {
                copy[index] = new TreeNode(val, left, right)
            }
        })

        return (copy[0] as TreeNode)
    }
}


// const tree = TreeNode.arrayToTree([1, 2, 3, null, 4])
// const tree1 = TreeNode.arrayToTree([1, null, 2])
// const tree2 = TreeNode.arrayToTree([1, 2, 3])

// console.log(tree1)
// console.log(tree2)
// const tree1 = TreeNode.arrayToTree([1, 2])
// const tree2 = TreeNode.arrayToTree([1, null, 2])

// console.log(tree1)
// console.log(tree2)