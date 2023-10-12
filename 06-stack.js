class Stack {
  constructor(length) {
    this.length = length;
    this.top = -1;
    this.stack = new Array(length);
  }

  push(value) {
    if (this.top === this.length - 1) {
      return "Stack is full";
    }
    this.top++;
    this.stack[this.top] = value;
  }

  pop() {
    if (this.top === -1) {
      return "Stack is empty";
    }
    const value = this.stack[this.top];
    this.top--;
    return value;
  }

  peek() {
    if (this.top === -1) {
      return "Stack is empty";
    }
    return this.stack[this.top];
  }

  isEmpty() {
    return this.top === -1;
  }

  isFull() {
    return this.top === this.length - 1;
  }

  print() {
    for (let i = 0; i <= this.top; i++) {
      console.log(this.stack[i]);
    }
  }
}

// reverse a string using stack
function reverseString(str) {
  const arr = str.split("");
  let res = "";

  while (arr.length) {
    res += arr.pop();
  }

  return res;
}

// parenthesis matching using stack
function parenthesisMatching(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == "{" || str[i] == "[") stack.push(str[i]);
    else if (str[i] == ")" || str[i] == "}" || str[i] == "]") {
      if (stack.length == 0) return false;

      const top = stack.pop();

      if (
        (str[i] === ")" && top !== "(") ||
        (str[i] === "}" && top !== "{") ||
        (str[i] === "]" && top !== "[")
      ) {
        return false;
      }
    }
  }
  return true;
}
