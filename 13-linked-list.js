// Node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class NodeDouble {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

// singly linked list
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  length() {
    let temp = this.head;
    let count = 0;

    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }

  display() {
    let temp = this.head;

    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  push(data) {
    const node = new Node(data);

    if (!this.head) this.head = node;
    else this.tail.next = node;

    this.tail = node;
  }

  pop() {
    if (!this.head) return null;
    else if (!this.head.next) {
      const data = this.head.data;
      this.head = null;
      this.tail = null;

      return data;
    }

    let temp = this.head;

    while (temp.next && temp.next.next) {
      temp = temp.next;
    }
    let data = temp.next.data;
    temp.next = null;
    this.tail = temp;

    return data;
  }

  insertAtHead(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }

  deleteFromHead() {
    if (!this.head) return null;

    const val = this.head.data;
    this.head = this.head.next;
    return val;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.length()) throw Error("index Error");

    if (index == 0) this.insertAtHead(data);
    else if (index == this.length) this.push(data);

    let count = 1;
    const node = new Node(data);
    let temp = this.head;

    while (count < index) {
      count++;
      temp = temp.next;
    }

    node.next = temp.next;
    temp.next = node;
  }

  find(val) {
    let temp = this.head;
    let index = -1;
    let count = 0;

    while (temp) {
      if (temp.data == val) {
        index = count;
        break;
      }
      count++;
      temp = temp.next;
    }

    return index;
  }
}

// doubly linked list
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  length() {
    let temp = this.head;
    let count = 0;

    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }

  display() {
    let temp = this.head;

    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  push(data) {
    const node = new NodeDouble(data);

    if (!this.head) {
      this.head = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
    }

    this.tail = node;
  }

  pop() {
    if (!this.head) {
      return null;
    } else if (!this.head.next) {
      const data = this.head.data;
      this.head = null;
      this.tail = null;
      return data;
    }

    const data = this.tail.data;
    this.tail = this.tail.prev;
    this.tail.next = null;

    return data;
  }

  insertAtHead(data) {
    const node = new Node(data);
    if (this.head) this.head.prev = node;

    node.next = this.head;
    this.head = node;
  }

  deleteFromHead() {
    if (!this.head) return null;

    if (this.head.next) this.head.next.prev = null;

    const data = this.head.data;
    this.head = this.head.next;

    return data;
  }
}

const d = new DoublyLinkedList();
d.insertAtHead(1);
d.insertAtHead(2);
d.insertAtHead(3);
d.insertAtHead(4);
d.display();
d.deleteFromHead();
d.deleteFromHead();
// d.deleteFromHead();
// d.deleteFromHead();
// d.deleteFromHead();
console.log(d.length());
console.log("=============");
d.display();
