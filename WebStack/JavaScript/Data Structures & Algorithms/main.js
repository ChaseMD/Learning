//  Reference: freeCodeCamp.org - https://www.youtube.com/watch?v=t2CEgPsws3U&list=PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V&index=3

// Stacks - first in, last out
// Functions: push, pop, peek, length, unshift, shift

var letters = [];
var word = "racecar";
var reversedWord = "";

// put characters of word into letters stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop the stack in reverse order
for (var i = 0; i < word.length; i++) {
  reversedWord += letters.pop();
}

if (reversedWord === word) {
  // console.log(word + " is a palindrome");
} else {
  // console.log(word + "is not a palindrome");
}

var Stack = function() {
  this.count = 0;
  this.storage = {};

  // Adds value onto end of stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and returns the value at end of stack
  this.pop = function() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  // Gets length of the stack
  this.size = function() {
    return this.count;
  };

  // Removes and returns element from front
  this.shift = function() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    result = this.storage[0];
    var newStorage = [];
    for (var i = 0; i < this.count; i++) {
      newStorage[i] = this.storage[i + 1];
    }
    this.storage = newStorage;
    return result;
  };

  // Appends to the front of list
  this.unshift = function(value) {
    this.count++;
    var newStorage = [value];
    for (var i = 1; i < this.count; i++) {
      newStorage[i] = this.storage[i - 1];
    }

    this.storage = newStorage;
  };

  this.peek = function() {
    return this.storage[this.count - 1];
  };
};

list = ["apple", "orange", "banana"];
let st = new Stack();
for (var i = 0; i < list.length; i++) {
  st.push(list[i]);
}

// Sets: like arrays, but no duplicates
// good for determining the existence of an element in a stack

function mySet() {
  // var collection holds the set
  var collection = [];
  // check for presence of an element, returns true/false
  this.has = function(element) {
    return collection.indexOf(element) !== -1;
  };
  // returns the collection
  this.values = function() {
    return collection;
  };
  // adds element to set
  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
  // removes element from set
  this.remove = function(element) {
    if (!this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  // returns size of collection
  this.size = function() {
    return collection.length;
  };

  // this method will return union of two sets
  this.union = function(otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function(e) {
      unionSet.add(e);
    });
    secondSet.forEach(function(e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  // returns intersection of two sets
  this.intersection = function(otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function(e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  // returns differene of two sets
  this.difference = function(otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function(e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  // tests if set is a subset of a different set
  this.subset = function(otherSet) {
    var firstSet = this.values();
    return firstSet.every(function(value) {
      return otherSet.has(value);
    });
  };
}

list = ["apple", "orange", "banana"];
set = new mySet();
for (var i = 0; i < list.length; i++) {
  set.add(list[i]);
}

// Queues - first in, first out
function Queue() {
  collection = [];
  this.print = function() {
    console.log(collection);
  };
  this.enqueue = function(element) {
    collection.push(element);
  };
  this.dequeue = function() {
    return collection.shift();
  };
  this.front = function() {
    return collection[0];
  };
  this.size = function() {
    return collection.length;
  };
  this.isEmpty = function() {
    return collection.length === 0;
  };
}

// Priority Queues - elements ordered on their priority

// Binary Search Tree
class btsNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    if (current === null) {
      return null;
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child
        if (node.left == null) {
          return node.right;
        }
        // node has no right child
        if (node.right == null) {
          return node.left;
        }
        // node has two children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.right;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  isBalance() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }

  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }

  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root != null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left != null) {
          Q.push(node.left);
        }
        if (node.right != null) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}

// Tree height: distance from root node to leaf nodes
// Min tree height: distance from root to node without two children
// Max tree height: distance from root to lowest node
// Tree balance: is true if differnce b/w min and max is 0 or 1, searching through it
//   is more efficient

// inOrder : nodes from left to right
// preOrder: root nodes first
// postOrder: leaf nodes first
// levelOrder: nodes on same level, top to bottom

// Hash Tables
var hash = (string, max) => {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

let hashTable = function() {
  let storage = [];
  const storageLimit = 4;

  this.print = function() {
    console.log(storage);
  };

  this.add = function(key, value) {
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      var inserted = false;
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storagep[index];
    } else {
      for (var i = 0; i < storage[index]; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  this.lookup = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
};

// Linked Lists
function linkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };

  this.remove = function(element) {
    var currentNode = head;
    var previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
  };

  this.isEmpty = function() {
    return length === 0;
  };

  this.indexOf = function(element) {
    var currentNode = head;
    var index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  };

  this.elementAt = function(index) {
    var currentNode = head;
    var count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };

  this.addAt = function(index, element) {
    var node = new Node(element);

    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    if (index > length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  };

  this.removeAt = function(index) {
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    if (index < 0 || index >= length) {
      return null;
    }

    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length++;
    return currentNode.element;
  };
}

// Tries / prefix tree - stores data in steps
let Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};

let trie = function() {
  this.root = new Node();

  this.add = function(input, node = this.node) {
    if (input.length == 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  };

  this.isWord = function(word) {
    let node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    }
    return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
  };

  this.print = function() {
    let words = new Array();
    let search = function(node, string) {
      if (node.keys.size != 0) {
        for (let letter of node.keys.keys()) {
          search(node.keys.get(letter), string.concat(letter));
        }
        if (node.isEnd()) {
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    };
    search(this.root, new String());
    return words.length > 0 ? words : null;
  };
};

// Heaps:
// Min, max heaps
// left: child i * 2, right: i*2 + 1
// parent: floor(i/2)
let MinHeap = function() {
  let heap = [null];

  this.insert = function(num) {
    heap.push(num);
    if (heap.length > 2) {
      let idx = heap.length - 1;
      while (heap[idx] < heap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          [heap[Math.floor(idx / 2)], heap[idx]] = [
            heap[idx],
            heap[Math.floor(idx / 2)]
          ];
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  };

  this.remove = function() {
    let smallest = heap[1];
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      if (heap.length == 3) {
        if (heap[1] > heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return smallest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
        if (heap[left] < heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i;
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] == undefined || heap[right] == undefined) {
          break;
        }
      }
    } else if (heap.length == 2) {
      heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  };

  this.sort = function() {
    let result = new Array();
    while (heap.length > 1) {
      result.push(this.remove());
    }
    return result;
  };
};

let MaxHeap = function() {
  let heap = [null];

  this.print = () => heap;

  this.insert = function(num) {
    heap.push(num);
    if (heap.length > 2) {
      let idx = heap.length - 1;
      while (heap[idx] > heap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          [heap[Math.floor(idx / 2)], heap[idx]] = [
            heap[idx],
            heap[Math.floor(idx / 2)]
          ];
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  };

  this.remove = function() {
    let smallest = heap[1];
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      if (heap.length == 3) {
        if (heap[1] < heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return smallest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
        if (heap[left] > heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i;
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] == undefined || heap[right] == undefined) {
          break;
        }
      }
    } else if (heap.length == 2) {
      heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  };
};
// Graphs: collections of things and their relationships/connections
// Directed: has direction on edges; Undirected: no direction on edges
// Ways to visualize: adjacency list
var undirectedGraph = {
  NodeA: ["NodeB"],
  NodeB: ["NodeA", "NodeC"],
  NodeC: ["NodeB"]
};
var undirectedGraphArray = {
  NodeA: [1],
  NodeB: [0, 2],
  NodeC: [1]
};

// Adjacency matrix
var undirectedAdjMatrix = [[0, 1, 0], [1, 0, 1], [0, 1, 0]];
// 1 to where node points to another node
var directedAdjMatrix = [[0, 0, 0], [1, 0, 0], [0, 1, 0]];

// Incidence matrix: rows: nodes; cols: edges
// Undirected: 1 means an edge exists between nodes.
// Directed: 1 edge leaves node, -1 enters node
var directedIncMatrix = [
  [1, 0, -1, 1],
  [-1, 1, 0, 0],
  [0, -1, 1, 0],
  [0, 0, 0, 1]
];

// Graphs can also have weights on their edges

/* Graphs: Breadth-first search */

function bfs(graph, root) {
  var nodesLen = {};

  for (var i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }
  nodesLen[root] = 0;

  var queue = [root];
  var current;

  while (queue.length != 0) {
    current = queue.shift();

    var curConnected = graph[current];
    var neighborIdx = [];
    var idx = curConnected.indexOf(1);
    while (idx != -1) {
      neighborIdx.push(idx);
      idx = curConnected.indexOf(1, idx + 1);
    }

    for (var j = 0; j < neighborIdx.length; j++) {
      if (nodesLen[neighborIdx[j]] == Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        queue.push(neighborIdx[j]);
      }
    }
  }
  return nodesLen;
}

var exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
];
console.log(bfs(exBFSGraph, 1));
