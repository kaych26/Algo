////////////////////////////////////////////
// Function decalarations
////////////////////////////////////////////
function name(value) {
  return value == null;
};
////////////////////////////////////////////
// Function expression: starts with "const"
////////////////////////////////////////////
const isTruthy = function(value) {
  return !!value;
};
// Function expression: an argument for .filter()
const numbers = ([1, false, 5]).filter(function (item) {
  return typeof item === 'number';
});
// Function expression (IIFE): starts with "("
(function messageFunction(message) {
  return message + 'World!';
})('Hello')

////////////////////////////////////////////
// Named function expression
// ananymous function
////////////////////////////////////////////
(
  function (variable) { return typeof variable }
  ).name;   //=> ''
  
  const myFunctionVAr = function (variable) {
    return typeof variable
  }
  myFunctionVar.name //=> 'myFunctionVAr'
  
  // shorthand method
  const collection = {
    items: [],
    add(...items) {
      this.items.push(...items);
    },
    get(index) {
      return this.items[index];
    }
  }
  collection.add('C', 'Java', 'PHP');
  collection.get(1) //-> 'Java'
  
  class Star {
    constructor(name) {
      this.name = name;
    }
    getMessage(message) {
      return this.name + message;
    }
  }
  const sun = new Star('Sun');
  sun.getMessage(' is shining') //=> 'Sun is shining'
  
  ////////////////////////////////////////////
  // An arrow function
  ////////////////////////////////////////////
  const absValue = (number) => {
    if (number < 0) {
      return -number;
    }
    return number;
  }
  absValue(-10)  // => 10
  absValue(5) // => 5
  
  
  class Numbers {
    constructor(array) {
      this.array = array;
    }
    addNumber(number) {
      if (number !== undefined) {
        this.array.push(number);
      }
      return (number) => {
        console.log(this === numbersObject); //=> true
        this.array.push(number);
      }
    }
  }
  const numbersObject = new Numbers([]);
  const addMethod = numbersObject.addNumber();
  
  addMethod(1)
  addMethod(5)
  console.log(numbersObject.array);
  
  ////////////////////////////////////////////
  // Generator function 
  ////////////////////////////////////////////
  // function declaration
function* indexGenerator() {
  var index = 0;
  while (true) {
    yield index++
  }
}
  const g = indexGenerator();
  console.log(g.next().value); // => 0
  console.log(g.next().value); // => 1

// function expression
const indexGenerator= function* () {
  let index = 0;
  while (true) {
    yield index++
  }
}
const g = indexGenerator();
console.log(g.next().value); // => 0
console.log(g.next().value); // => 1

// shorthand method definition from *<name>()
const obj = {
  * indexGenerator() {
    var index = 0;
    while (true) {
      yield index++;
    }
  }
}
const g = obj.indexGenerator();
console.log(g.next().value); // => 0
console.log(g.next().value); // => 1