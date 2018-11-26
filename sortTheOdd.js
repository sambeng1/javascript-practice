/*
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/


function sortArray(array) {

    let finalArray = [];
    let oddArray = []
    let oddPushCount = 0;
    for (let i = 0; i < array.length; i++){
        let curChar = array[i];
        if (curChar % 2 === 1 && curChar ){
            oddArray.splice(0,0,curChar);
        }
    }
    
    oddArray.sort(function (a, b){
        return a - b;
      });

    for (let i = 0; i < array.length; i++){
        let curChar = array[i];
        if (curChar % 2 === 1){
            finalArray.push(oddArray[oddPushCount]);
            oddPushCount++;
        }
        else {finalArray.push(curChar)};
    }
    
    console.log(oddArray)
    return finalArray;
  }