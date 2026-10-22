class TrieNode {
    val: string
    isWord: boolean
    children: Map<string, TrieNode>
    words: string[]

    constructor(val: string, isWord = false) {
        this.val = val
        this.children = new Map()
        this.isWord = isWord
        this.words = []
    }
}

class Trie {
    root: TrieNode
    words: string[]

    constructor() {
        this.root = new TrieNode('')
        this.words = []
    }

    insert(val: string) {
        let root = this.root

        for (const char of val) {
            const children = root.children

            const node = children.get(char)

            if (!node) {
                const newNode = new TrieNode(char)
                children.set(char, newNode)
                root = newNode
            }
            else {
                root = node
            }

            if (root.words.length < 3) root.words.push(val)
        }

        root.isWord = true
    }

    search(val: string) {
        let root = this.root

        for (const char of val) {
            const node = root.children.get(char)

            if (!node) return

            root = node
        }

        return root
    }

    startsWith(val: string) {
        let root = this.root

        for (const char of val) {
            const node = root.children.get(char)

            if (!node) return

            root = node
        }

        return root
    }
}

function suggestedProducts(products: string[], searchWord: string): string[][] {
    const sortedProducts = products.toSorted()

    const trie = new Trie()

    for (const product of sortedProducts) {
        trie.insert(product)
    }

    const results = []

    for (let i = 1; i <= searchWord.length; i++) {
        const node = trie.startsWith(searchWord.slice(0, i))

        if (!node) results.push([])
        else {
            const result: string[] = []

            node.words.values().take(3).forEach((word) => result.push(word))

            results.push(result)
        }
    }

    return results
};


console.log(
    suggestedProducts(["mobile", "mouse", "moneypot", "monitor", "mousepad"], 'mouse'),
)
// console.log(
//     [
//         "mobile", "mouse", "moneypot", "monitor", "mousepad"
//     ].sort()
// )