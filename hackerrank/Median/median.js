
// function balanceMax(heap) {
//   if (heap.length > 1) {
//     let current = heap.length - 1
    
//     // console.log (`    MAX balance    Parent=${heap[Math.floor(current/2)]}    child=${heap[current]}`)
//     while (current > 1 && heap[Math.floor(current / 2)] < heap[current]) {
//       // console.log (`    MAX balance    Parent=${heap[Math.floor(current/2)]}    child=${heap[current]}`)
//       [heap[Math.floor(current / 2)], heap[current]] =
//         [heap[current], heap[Math.floor(current / 2)]]
//       current = Math.floor(current/2)
//     }
//   }
//   return heap
// }

// function balanceMin(heap) {
//   if (heap.length > 1) {
//     let current = heap.length - 1
    
//     console.log (`    MIN balance    current=${current}   Parent=${heap[Math.floor(current/2)]}    child=${heap[current]}`)
//     while (current > 1 && heap[Math.floor(current / 2)] > heap[current]) {
//       console.log (`    IN WHILE MIN balance    Parent=${heap[Math.floor(current/2)]}    child=${heap[current]}`)
//       [heap[Math.floor(current / 2)], heap[current]] =
//         [heap[current], heap[Math.floor(current / 2)]]
//       current = Math.floor(current/2)
//     }
//   }
//   return (heap)
// }


function balanceMax(heap) {
  let index = heap.length-1

  while (index > 0) {
      let element = heap[index]
      let parentIndex = Math.floor((index-1)/2)
      let parent = heap[parentIndex]

      if (parent >= element) break
      
      heap[index] = parent;
      heap[parentIndex] = element;
      index = parentIndex
  }
  return heap
}

function balanceMin(heap) {
  let index = heap.length-1

  while (index > 0) {
      let element = heap[index]
      let parentIndex = Math.floor((index-1)/2)
      let parent = heap[parentIndex]

      if (parent <= element) break
      
      heap[index] = parent;
      heap[parentIndex] = element;
      index = parentIndex
  }
  return heap
}


function sinkDownMin(index, heap) {
 
  let left = 2*index+1
  let right = 2*index+2
  let largest = index
  let length = heap.length

  if (left <= length && heap[left] < heap[largest]) {
      largest = left
  }
  if (right <= length && heap[right] < heap[largest]) {
      largest = right
  }
  // swap
  if (largest !== index) {
      [heap[largest], heap[index]] = 
      [heap[index], heap[largest]]
    
      sinkDownMin(largest, heap)
  }
  
}

function sinkDownMax(index, heap) {
  let left = 2*index+1
  let right = 2*index+2
  let largest = index
  let length = heap.length

  if (left <= length && heap[left] > heap[largest]) {
      largest = left
  }
  if (right <= length && heap[right] > heap[largest]) {
      largest = right
  }
  // swap
  if (largest !== index) {
      [heap[largest], heap[index]] = 
      [heap[index], heap[largest]]
      sinkDownMax(largest, heap)
  }
  
}

function runningMedian(a) {
    /*
     * Write your code here.
     */

  let minheap = []
  let maxheap = []
  let median=0
  const result = []


  if (a.length >= 2) {
    if (a[0] > a[1]) {
      minheap.push(a[0])
      maxheap.push(a[1])
    }
    else {
      maxheap.push(a[0])
      minheap.push(a[1])
    }
    median = (a[0]+a[1]) / 2.0
  }

  result.push(a[0].toFixed(1))
  result.push(median.toFixed(1))

  for (let i = 2; i < a.length; i += 1) {
    console.log (`*** i=${i}`)
    if (a[i] <= maxheap[0]) {
      maxheap.push(a[i])
      console.log (`ADDING to MAX= ${maxheap}`)
      maxheap = balanceMax(maxheap)
      console.log (`  AFTER  balance max= ${maxheap}`)
    }
    else {
      minheap.push(a[i])
      console.log (`ADDING to MIN= ${minheap}`)
      minheap = balanceMin(minheap)
      console.log (`   AFTER  balance min= ${minheap}`)
    }

    if (minheap.length > maxheap.length+1) {
      // const element = minheap.shift()
      maxheap.push(minheap[0])
      maxheap = balanceMax(maxheap)
      
      minheap[0] = minheap[minheap.length - 1]
      minheap.pop()

      console.log (`    +++ before sinkdown MIN= ${minheap}`)
      sinkDownMin(0, minheap)
    }
      
    if (maxheap.length > minheap.length + 1) {
      // const element = maxheap.shift()
      minheap.push(maxheap[0])
      minheap = balanceMin(minheap)

      maxheap[0] = maxheap[maxheap.length - 1]
      maxheap.pop()
      console.log (`    +++ before sinkdown MAX= ${maxheap}`)
      sinkDownMax(0, maxheap)
    }

    console.log(`      ==> MIN= ${minheap}`)
    console.log(`      ==> MAX= ${maxheap}`)
      
    if (minheap.length === maxheap.length) {
      median = ((maxheap[0] + minheap[0]) / 2.0).toFixed(1)
      console.log (`    MEDIAN equal = ${median}`)
      // median = ((maxheap[0] + minheap[minheap.length-1])/2.0).toFixed(1)
    }
    else if (minheap.length > maxheap.length) {
      median = minheap[0].toFixed(1)
      console.log (`    MEDIAN from min = ${median}`)
    }
    else if (minheap.length < maxheap.length) {
      median = maxheap[0].toFixed(1)
      console.log (`    MEDIAN from max = ${median}`)
    }
    result.push(median)
  }

  for (let j = 0; j < result.length; j++) {
    console.log(`${j}   ${result[j]}`)
  }
   return (result)
}

// console.log(runningMedian([12,4,5,3,8,7]))
// const res = runningMedian([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// console.log(res)

console.log(runningMedian([94455, 20555, 20535, 53125, 73634, 148]))
console.log(runningMedian([
94455,
20555,
20535,
53125,
73634,
148,
63772,
17738,
62995,
13401,
95912,
13449,
92211,
17073,
69230,
22016,
22120,
78563,
  16571,
  1817,
41510,
74518,
81638,
89659,
60445,
35597,
15237,
88830,
26019,
77519,
10914,
36827,
98074,
31450,
89952,
71709,
31598,
70076,
5799
]))

// eXPECTED OUTPUT 
// 94455.0
// 57505.0
// 20555.0
// 36840.0
// 53125.0
// 36840.0
// 53125.0
// 36840.0
// 53125.0
// 36840.0
// 53125.0
// 36840.0
// 53125.0
// 36840.0
// 53125.0
// 37570.5
// 22120.0
// 37622.5
// 22120.0




// console.log(runningMedian([
// 1000,
// 94455,
// 20555,
// 20535,
// 53125,
// 73634,
// 148,
// 63772,
// 17738,
// 62995,
// 13401,
// 95912,
// 13449,
// 92211,
// 17073,
// 69230,
// 22016,
// 22120,
// 78563
// ]))
