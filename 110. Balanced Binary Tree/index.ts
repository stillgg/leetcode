import { TreeNode } from "../common/treeNode.ts"

function isBalanced(root: TreeNode | null): boolean {
    if (!root) return true

    const stack: [TreeNode | null, number][] = [[root, 1]]
    const heights: number[] = []

    while (stack.length) {
        const [node, height] = stack.pop()

        if (!node.left && !node.right) {
            heights.push(height)
            continue
        }

        if (node.left) stack.push([node.left, height + 1])
        if (node.right) stack.push([node.right, height + 1])
    }

    return Math.min(...heights) + 1 >= Math.max(...heights)
};

// const tree = TreeNode.arrayToTree([1, 2, 2, 3, 3, null, null, 4, 4])
const tree = TreeNode.arrayToTree([1, 2, 3, 4, 5, 6, null, 8])

console.log(isBalanced(tree))