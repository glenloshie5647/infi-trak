/* filename: complexCode.js */
/*
   This code is an implementation of a binary search tree (BST) data structure.
   It includes various functions to perform operations such as insertion, deletion, and searching on the BST.
   The code is written in a modular and object-oriented approach.
*/

// Define the class for a single node in the BST
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Define the BST class to maintain the tree structure
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the BST
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper function to recursively insert a node
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Find the minimum value in the BST
  findMinValue() {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.value;
  }

  // Find the maximum value in the BST
  findMaxValue() {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.value;
  }

  // Check if a value exists in the BST
  search(value) {
    return this.searchNode(this.root, value);
  }

  // Helper function to recursively search for a value
  searchNode(node, value) {
    if (node === null) {
      return false;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }

  // Remove a value from the BST
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  // Helper function to recursively remove a node
  removeNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      // Case 1: No child nodes
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // Case 2: One child node
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Case 3: Two child nodes
      const minValue = this.findMinValue(node.right);
      node.value = minValue;
      node.right = this.removeNode(node.right, minValue);
      return node;
    }
  }
}

// Create an instance of the BinarySearchTree
const bst = new BinarySearchTree();

// Insert values into the BST
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

// Print the minimum value in the BST
console.log("Minimum value:", bst.findMinValue());

// Print the maximum value in the BST
console.log("Maximum value:", bst.findMaxValue());

// Search for a value in the BST
console.log("Search for value 30:", bst.search(30)); // true
console.log("Search for value 45:", bst.search(45)); // false

// Remove a value from the BST
bst.remove(30);
console.log("Search for value 30 after removal:", bst.search(30)); // false

// Additional operations on the BST can be added here...

// End of complexCode.js