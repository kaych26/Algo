function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function hashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function (key) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  let bucket = total % this.numBuckets;
  return bucket;
};

/*-----------------------------------
  insert new nodes and update information
  if key already exist
------------------------------------*/

HashTable.prototype.insert = function (key, value) {
  let index = this.hash(key);
  console.log('   INDEX: ', index);
  if (!this.buckets[index]) {
    this.buckets[index] = new hashNode(key, value);
  } else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
  } else {
    let currentNode = this.buckets[index];
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new hashNode(key, value);
  }
};

HashTable.prototype.get = function (key) {
  let index = this.hash(key);
  if (!this.buckets[index]) return null;
  else {
    let currentNode = this.buckets[index];
    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
};

HashTable.prototype.retrieveAll = function () {
 
  let allNodes = [];
  for (let i = 0; i < this.numBuckets; i++) {
    let currentNode = this.buckets[i];

    while (currentNode) {
      allNodes.push(currentNode.value);
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
  return allNodes;
};

let myHT = new HashTable(30);
myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com');
myHT.insert('Dane', 'dane@gmail.com');
myHT.insert('Dean', 'deanMachine@yahoo.com');

console.log(myHT.get('Dean'));
console.log(myHT.get('Megan'));
console.log(myHT.retrieveAll());

// console.log(myHT.buckets);

// console.log(myHT.hash('Becca'));

// console.log(myHT);
// console.log('hello world'.charCodeAt(1));
// console.log(7 % 3);
