import { TreeNode } from "../../common/treeNode.ts"


function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
};

// const tree1 = TreeNode.arrayToTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
// const p = tree1?.left?.right?.right ?? null // 4
// const q = tree1?.right?.right ?? null // 8

// console.log('p - ', p)
// console.log('q - ', q)
// console.log(lowestCommonAncestor(tree1, p, q))


// const tree2 = TreeNode.arrayToTree([3, 5, 1])
// const p2 = tree2?.left ?? null // 5
// const q2 = tree2?.right ?? null // 1

// console.log('p - ', p2)
// console.log('q - ', q2)
// console.log(lowestCommonAncestor(tree2, p2, q2))

const tree1 = TreeNode.arrayToTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
const p = tree1?.left ?? null // 5
const q = tree1?.left?.right?.right ?? null // 4

// console.log('p - ', p)
// console.log('q - ', q)
console.log(lowestCommonAncestor(tree1, p, q))