class TrieNode {
  constructor() {
    this.value = undefined;
    this.isEnd = false;
    this.arr = new Array(26).fill(null);
  }
}

class TrieTree {
  constructor() {
    this.root = new TrieNode();
  }
  
  insert(word, value) {
    let node = this.root;

    for (let i = 0; i < word.length; i += 1) {
      const index = parseInt(word[i], 36) - 10;

      if (node.arr[index] === null) {
        const temp = new TrieNode();

        node.arr[index] = temp;
        node = temp;
      }
      else {
        node = node.arr[index]
      }
    }
    node.isEnd = true
    node.value = value
  }
  getRoot() {
    return this.root
  }

  startsWith(prefix) {
    const node = this.searchNode(prefix);
    if (node == null) {
      return false
    }
    else {
      this.printStrings(node, '')
      return true
    }
  }

  printStrings(node, prefix) {
    if (node.isEnd) 
      console.log(prefix)
    for (let i = 0; i < node.arr.length; i += 1) {
      if (node.arr[i] !== null) {
        const character = String.fromCharCode('a'.charCodeAt() + i)
        this.printStrings(node.arr[i], prefix + '' + (character));
      }
    }
  }

  searchNode(str) {
    let node = this.root;
    for (let i = 0; i < str.length; i += 1) {
      const index = parseInt(str[i], 36) - 10
      if (node.arr[index] !== null) {
        node = node.arr[index]
      }
      else {
        return null
      }
    }
    if (node === this.root)
      return null
    
    return node
  }

}

const trieTree = new TrieTree()
trieTree.insert('hack', 5)
trieTree.insert('hackathon', 23)

let answer = trieTree.startsWith('hac')

console.log (answer)
