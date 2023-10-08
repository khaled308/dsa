// Node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
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

const s = new SinglyLinkedList();
s.push(1);
s.push(2);
s.push(100);
// s.insertAtHead(-1);
console.log(s.length());
s.display();

console.log(s.find(2));
