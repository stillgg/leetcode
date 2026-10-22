class TrieNode {
    children: Map<string, TrieNode>
    terminal: boolean

    constructor() {
        this.children = new Map()
        this.terminal = false
    }
}

class Trie {
    root: TrieNode

    constructor() {
        this.root = new TrieNode()
    }

    insert(word: string): void {
        let current = this.root

        for (const char of word) {
            const child = current.children.get(char)

            if (!child) {
                const newChild = new TrieNode()

                current.children.set(char, newChild)

                current = newChild
            }
            else {
                current = child
            }
        }

        current.terminal = true
    }

    search(word: string): boolean {
        let current = this.root

        for (const char of word) {
            const child = current.children.get(char)
            
            if (!child) return false

            current = child
        }

        return current.terminal
    }

    startsWith(prefix: string): boolean {
        let current = this.root

        for (const char of prefix) {
            const child = current.children.get(char)

            if (!child) return false

            current = child
        }

        return true
    }
}

const trie = new Trie()

// ["Trie","insert","insert","insert","insert","insert","insert","search","search","search"]
// [[],    ["app"],["apple"],["beer"],["add"], ["jam"],["rental"] ["apps"],["app"],["ad"],["applepie"],["rest"]]
// [null,null,null,null,null,null,null,false,false]

trie.insert('app')
trie.insert('apple')

console.log(trie.search('app'))

console.log(trie.search('apps'))

console.log(trie.search('appl'))

