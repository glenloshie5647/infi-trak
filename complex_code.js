// filename: complex_code.js

/**
 * This code demonstrates a sophisticated and elaborate implementation 
 * of a priority queue data structure using a heap as the underlying data structure.
 * It includes various operations like insertion, deletion, and querying of elements
 * based on their priority.
 */

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChild(i) {
    return 2 * i + 1;
  }

  rightChild(i) {
    return 2 * i + 2;
  }

  swap(a, b) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  siftUp(i) {
    while (i > 0 && this.heap[this.parent(i)][1] > this.heap[i][1]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  siftDown(i) {
    let minIndex = i;
    const left = this.leftChild(i);
    if (left < this.heap.length && this.heap[left][1] < this.heap[minIndex][1]) {
      minIndex = left;
    }
    const right = this.rightChild(i);
    if (right < this.heap.length && this.heap[right][1] < this.heap[minIndex][1]) {
      minIndex = right;
    }

    if (i !== minIndex) {
      this.swap(i, minIndex);
      this.siftDown(minIndex);
    }
  }

  insert(priority, value) {
    this.heap.push([priority, value]);
    this.siftUp(this.heap.length - 1);
  }

  deleteMin() {
    if (this.heap.length === 0) {
      return null;
    }
    const minElement = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.siftDown(0);
    return minElement;
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  size() {
    return this.heap.length;
  }
}

// Usage example

const pq = new PriorityQueue();
pq.insert(3, 'Task 1');
pq.insert(1, 'Task 2');
pq.insert(5, 'Task 3');
pq.insert(2, 'Task 4');
pq.insert(4, 'Task 5');

console.log(pq.deleteMin());
console.log(pq.deleteMin());
console.log(pq.deleteMin());
console.log(pq.deleteMin());
console.log(pq.deleteMin());
console.log(pq.deleteMin());

console.log(pq.size());