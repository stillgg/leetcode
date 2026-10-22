import { TreeNode } from "../common/treeNode.ts";

const preorder: number[] = []
const inorder: number[] = []
const postorder: number[] = []

const dfs = (root: TreeNode | null) => {
    if (!root) return null

    preorder.push(root.val)
    dfs(root.left)
    inorder.push(root.val)
    dfs(root.right)
    postorder.push(root.val)
}

const tree = TreeNode.arrayToTree([1, 2, 3, 4, 5, 6, 7])

dfs(tree)

console.log('preorder - ', preorder)
console.log('inorder - ', inorder)
console.log('postorder - ', postorder)
