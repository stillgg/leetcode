/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "../common/treeNode.ts"

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const stack = [p, q]

    while (stack.length) {
        const node1 = stack.pop()
        const node2 = stack.pop()

        if (!node1 && !node2) continue

        if (!node1 || !node2) return false

        if (node1.val !== node2.val) return false

        stack.push(node1.right)
        stack.push(node2.right)

        stack.push(node1.left)
        stack.push(node2.left)
    }

    return true
};

const tree1 = TreeNode.arrayToTree([1, 2])
const tree2 = TreeNode.arrayToTree([1, null, 2])

// console.log(tree1)
// console.log(tree2)
console.log(isSameTree(tree1, tree2))