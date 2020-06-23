// sorting array 
// 1 4 3 5 6 2
// 1 3 4 5 6 2
// 1 3 4 5 6 2
// 1 3 4 5 6 2
// 1 2 3 4 5 6

function insertionSort2(n, arr) {
    let newArr= arr;
    for (let i=1; i < arr.length; i+=1) {

        let j=i-1;
        // console.log (`i=${i}  j=${j}  arr=${arr[i]} arr2=${arr[j]}`)
        let curr = i
        while (j>=0) {
            // console.log (`inside ${arr[i]} ${arr[j]}`)

            if (arr[curr]< arr[j] ) {

                // console.log("swap")
                let temp = arr[j]
                arr[j] = arr[curr]
                arr[curr] = temp
                curr=j;
            }
            j--;
        }
        console.log (arr.join(" "))
        // return arr
    }
}


//////////////////////////////////
// icecreamParlor function below.
//////////////////////////////////

function icecreamParlor(m, costs) {
    const compliments = {};  // key: val = cost: index
    // console.log (`m= ${m}    arr=${arr}`)
    for (let i=0; i < costs.length; i+=1) {
        const cost = costs[i];

        if (cost >= m) continue;

            const compliment = m - cost

            if (compliments[cost]) {
                // console.log
                const costIndex = i+1;
                const complimentIndex = compliments[cost];
                const min = Math.min(costIndex, complimentIndex);
                const max = Math.max(costIndex, complimentIndex)
               
                // let result = `${min} ${max}`
                console.log (`${min} ${max}`);
                return;
            }
            compliments[compliment] =i+1;
    }

}


//////////////////////////////////
// MERGE SORT
//////////////////////////////////

function mergeSort (unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(
    mergeSort(left), mergeSort(right)
  );
}


// Merge the two arrays: left and right
function merge (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

//////////////////////////////////
// SPIRAL MATRIX
//////////////////////////////////

function spiral (n) {
  
  let result = new Array(n).fill().map(() => new Array(n).fill(''));
  
  let counter = 1;
  let startCol= 0;
  let endCol = n-1;
  let startRow = 0;
  let endRow = n -1;
  
  while (startCol <= endCol && startRow <= endRow) {
    
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;
    for (let j = startRow; j <= endRow; j++) {
      result[j][endCol] = counter;
      counter++;
    }
    endCol--;
    
    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter;
      counter++;
    }
    
    endRow--;
    for (let i=endRow; i>=startRow; i--) {
      result[i][startCol]=counter;
      counter++;
    }
  
  startCol++;
  }
  return result
}
console.log (spiral (5));


//////////////////////////////////
//   print_look_and_say_seq 
//////////////////////////////////

function print_look_and_say_seq (count) {
  let val ='1';
  
  for (let i = 1; i<=count; i+=1) {
    
    console.log (val)
    val=output_val(val)
  
  }

}

function output_val(input) {
  
  if (input.length == 1) {
    return `1${input}`;
  }
  
// input = 1211
// input.length = 4
  
//   i=1, 2, 3, 4
//   cur=input[0] = 1, 2, 1
//   count=1, 2
//   input[i] = 2, 1, 1, undef
  ret = 11, 1112, 111221
  
  
  let ret = ''
  let cur = input[0]
  let count = 1
  
  for (let i=1; i<=input.length; i+=1) {
    
    // console.log (input.length)
    
    if (cur != input[i] || i == input.length) {
      
      ret += `${count}${cur}`
      count = 1
      cur = input[i]
      
      // console.log (`IF ret=${ret}  count=${count}   cur=${cur}`)
    } 
    else {
      count++;
    }    
  }
  return ret;
}

console.log(print_look_and_say_seq (10))

//////////////////////////////////
//   print_look_and_say_seq 
//////////////////////////////////


function OneEditApart (s1, s2) {
  if (Math.abs(s1.length - s2.length) > 1) {
    return false;
  }
  
  let diff = false; 
  let j=0;
  
  for (let i=0; i< s1.length; i+=1 ) {
    
    if (s1[i] != s2[j]) {
      if (diff) { 
        return false 
      }
      diff = true;
      
      if (s2.length > s1.length) {
        --i;
      }
      if (s2.length < s1.length) {j--}
    }
    j++;
    
    
  }
  // console.log (diff)
  return diff || s2.length != s1.length
    
}

console.log (OneEditApart("cat", "dog"))
console.log (OneEditApart("cat", "cats"))
console.log (OneEditApart("cat", "cut"))
console.log (OneEditApart("cat", "cast"))
console.log (OneEditApart("cat", "at"))
console.log (OneEditApart("cat", "act"))
console.log (OneEditApart("cat", "tt"))
