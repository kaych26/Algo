function LinkedList() {
  this.head = null;
  this.tail = null;

}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev
}

LinkedList.prototype.addToHead = function (value) {
  let newNode = new Node(value, this.head, null);
  if (this.head)
    this.head.prev = newNode;
  else
    this.tail = newNode;
  this.head = newNode;
}

LinkedList.prototype.addToTail = function (value) {
  let newNode = new Node(value, null, this.tail);
  if (this.tail)
    this.tail.next = newNode;
  else
    this.head = newNode;
  this.tail = newNode;
}

LinkedList.prototype.removeHead = function () {
  if (!this.head)
    return null;
  const val = this.head.value;
  this.head = this.next.next;
  if (this.head)
    this.head.prev = null;
  else
    this.tail = null;
  return val;
}

LinkedList.prototype.removeTail = function () {
  if (!this.tail)
    return null;
  const val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail)
    this.tail.next = null;
  else
    this.head = null;
  return val;
}

LinkedList.prototype.search = function (searchValue) {
  
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchValue) 
      return currentNode.value
    currentNode = currentNode.next;
  }
  return null;
}

LinkedList.prototype.indexOf = function (searchValue) {
  const result = [];
  let idx = 0;
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchValue)
      result.push(idx);
    idx += 1;
    currentNode = currentNode.next;
  }
  return result;
}

let ll = new LinkedList();
// console.log(ll)

// let node1 = new Node(100, 'node2', null);
// console.log (node1)
ll.addToHead(10);
ll.addToTail(20);
ll.addToTail(20);
ll.addToTail(30);
ll.addToTail(40);
ll.addToTail(40);
console.log (ll)
console.log(ll.search(20));
console.log(ll.indexOf(20));
// console.log (ll)