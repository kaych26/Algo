/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
*/

function makeArrayConsecutive2(statues) {
  let sorted = statues.sort((a,b)=>a-b);
  
  let result=[];
  
  for (let i=0; i< sorted.length-1; i++) {
      let diff = sorted[i+1] - sorted[i]
      while (diff > 1) {
          result.push(sorted[i]+1)
          diff -= 1;
      }
  }
  return result.length;
}

/*
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.
*/

function almostIncreasingSequence(sequence) {
        
  let arr = sequence;
  let smaller = 0
  
  for (let i=1; i < arr.length; i++) {
      
      if (arr[i] === arr[i-1]) 
          smaller += 1;
      
      else if (arr[i] < arr[i-1] ) {
          smaller += 1;

          if (arr[i] <= arr[i-2])
              arr[i] = arr[i-1];
      }   
  }
  
  if (smaller > 1) 
      return false;
  else 
      return true;
}


/*
After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

Example

For

matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]
the output should be
matrixElementsSum(matrix) = 9
*/

function matrixElementsSum(matrix) {
    
  let total = 0;
  let haunted={};
  for (let i=0; i < matrix.length; i++) {
      for (let j=0; j< matrix[i].length; j++) {
          if (matrix[i][j] === 0) {
              if (!haunted[j])
                  haunted[j] = j;
          }
          else if (haunted[j] !== j) {
              total += matrix[i][j];
          } 
      }
  }
  return total;

}
