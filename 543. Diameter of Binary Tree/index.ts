import { TreeNode } from "../common/treeNode.ts"

function diameterOfBinaryTree(root: TreeNode | null): number {
    if (!root) return 0

    const depth = (root: TreeNode | null, deep: number): number => {
        if (!root) return deep

        const left = depth(root.left, deep + 1)
        const right = depth(root.right, deep + 1)

        return Math.max(left, right)
    }

    let max = -Infinity

    const dfs = (root: TreeNode | null): void => {
        if (!root) return

        const left = depth(root.left, 0)
        const right = depth(root.right, 0)

        max = Math.max(max, left + right)

        dfs(root.left)
        dfs(root.right)
    }

    dfs(root)

    return max
};


const tree = TreeNode.arrayToTree(
    [4, -7, -3, null, null, -9, -3, 9, -7, -4, null, 6, null, -6, -6, null, null, 0, 6, 5, null, 9, null, null, -1, -4, null, null, null, -2]
)

console.log(diameterOfBinaryTree(tree))