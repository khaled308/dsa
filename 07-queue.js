class Queue {
  constructor(length) {
    this.length = length;
    this.front = -1;
    this.rear = -1;
    this.queue = new Array(length);
  }

  enqueue(value) {
    if (this.rear === this.length - 1) {
      return "Queue is full";
    }
    this.rear++;
    this.queue[this.rear] = value;
  }

  dequeue() {
    if (this.front === this.rear) {
      return "Queue is empty";
    }
    this.front++;
    const value = this.queue[this.front];
    return value;
  }

  peek() {
    if (this.front === this.rear) {
      return "Queue is empty";
    }
    return this.queue[this.front + 1];
  }

  isEmpty() {
    return this.front === this.rear;
  }

  isFull() {
    return this.rear === this.length - 1;
  }

  print() {
    for (let i = this.front + 1; i <= this.rear; i++) {
      console.log(this.queue[i]);
    }
  }
}
