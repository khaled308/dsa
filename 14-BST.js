class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function insert(root, data) {
  if (!root) return new Node(data);

  if (root.data < data) root.right = insert(root.right, data);
  else root.left = insert(root.left, data);

  return root;
}

function inOrder(root) {
  if (root) {
    inOrder(root.left);
    console.log(root.data);
    inOrder(root.right);
  }
}

function preOrder(root) {
  if (root) {
    console.log(root.data);
    inOrder(root.left);
    inOrder(root.right);
  }
}

function postOrder(root) {
  if (root) {
    inOrder(root.left);
    inOrder(root.right);
    console.log(root.data);
  }
}

function levelOrder(root) {
  const queue = [];

  if (root.data) queue.push(root);

  while (queue.length) {
    const temp = queue.shift();
    console.log(temp.data);

    if (temp.left) queue.push(temp.left);

    if (temp.right) queue.push(temp.right);
  }
}

function search(root, val) {
  while (root) {
    if (root.data == val) return true;
    else if (val > root.data) root = root.right;
    else root = root.left;
  }

  return false;
}

function treeHeight(root) {
  if (!root) return 0;

  return Math.max(treeHeight(root.left), treeHeight(root.right)) + 1;
}

const root = new Node(10);
insert(root, 5);
insert(root, 15);
insert(root, 3);
insert(root, 7);
insert(root, 12);
insert(root, 17);
insert(root, 1);
insert(root, 4);
insert(root, 6);

console.log(search(root, 15));
